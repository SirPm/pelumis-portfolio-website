"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimateOnScrollProps {
	children: React.ReactNode;
	animationClass: string;
	className?: string;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
	children,
	animationClass,
	className = "",
}) => {
	const [ref, isIntersecting] = useIntersectionObserver({
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	});

	return (
		<div
			ref={ref as React.RefObject<HTMLDivElement>}
			className={`${className} ${isIntersecting ? animationClass : ""}`}
		>
			{children}
		</div>
	);
};
