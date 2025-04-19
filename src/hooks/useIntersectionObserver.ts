import { useEffect, useRef, useState } from "react";

type IntersectionDirection = "top" | "bottom" | "both";

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
	direction?: IntersectionDirection;
}

/**
 * Custom hook that uses the Intersection Observer API to detect if an element is in the viewport.
 *
 * @param {UseIntersectionObserverOptions} options - Options for the Intersection Observer with direction control.
 * The direction could either be "top", "bottom", or "both".
 * If you set the direction to "top", it will only trigger when you're scrolling to the top.
 * If you set it to "bottom", it will only trigger when you're scrolling to the bottom.
 * If you set it to "both" or don't set it at all, it will trigger for both directions.
 * @returns {[React.RefObject<HTMLElement>, boolean]} - A ref to attach to the target element and a boolean indicating if the element is in the viewport.
 */
export const useIntersectionObserver = (
	options: UseIntersectionObserverOptions = {}
) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef<HTMLElement>(null);

	// Track the previous scroll position
	const previousYRef = useRef<number>(0);
	const direction = options.direction || "both";

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!ref.current) return;
				const currentY = entry.boundingClientRect.top;
				const isMovingDown = currentY < previousYRef.current;

				// Check if the element is intersecting based on the direction
				if (entry.isIntersecting) {
					if (direction === "both") {
						setIsIntersecting(true);
					} else if (direction === "top" && !isMovingDown) {
						setIsIntersecting(true);
					} else if (direction === "bottom" && isMovingDown) {
						setIsIntersecting(true);
					}
				} else {
					setIsIntersecting(false);
				}

				previousYRef.current = currentY;
			},
			{
				threshold: 0.1,
				...options,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		const currentRef = ref.current;
		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [options, direction]);

	return [ref, isIntersecting] as const;
};
