import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that uses the Intersection Observer API to detect if an element is in the viewport.
 *
 * @param {IntersectionObserverInit} options - Options for the Intersection Observer.
 * @returns {[React.RefObject<HTMLElement>, boolean]} - A ref to attach to the target element and a boolean indicating if the element is in the viewport.
 */

interface IntersectionObserverOptions extends IntersectionObserverInit {}

export const useIntersectionObserver = (
	options: IntersectionObserverOptions
) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				threshold: 0.1, // Fraction (or percentage) of the observed element needs to be visible within the viewport for the intersection callback to fire. 0.1 means 10% of the element is visible. and it's the default I'm using
				...options,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [options]);

	return [ref, isIntersecting] as const;
};
