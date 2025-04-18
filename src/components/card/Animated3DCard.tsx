"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

interface IAnimated3DCardProps {
	children: React.ReactNode;
	cardClassName: string;
}

export const Animated3DCard = (props: IAnimated3DCardProps) => {
	const { children, cardClassName } = props;
	const cardRef = useRef<HTMLDivElement | null>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseMove = (evt: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;

		const card = cardRef.current;
		const { left, top, width, height } = card.getBoundingClientRect();

		// Calculate mouse position relative to card (0-1)
		const relativeX = (evt.clientX - left) / width;
		const relativeY = (evt.clientY - top) / height;

		// Convert to values centered around 0 (-0.5 to 0.5)
		const centerX = relativeX - 0.5;
		const centerY = relativeY - 0.5;

		// Move in opposite direction of mouse with subtle movement
		const moveX = -centerX * 10;
		const moveY = -centerY * 10;

		setPosition({ x: moveX, y: moveY });
	};

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
		setPosition({ x: 0, y: 0 });
	};

	return (
		<div className="relative">
			{/* Shadow element that moves slightly less than the card */}
			<motion.div
				className={` inset-0 bg-black ${cardClassName}`}
				style={{ filter: "blur(15px)", opacity: 0.2, zIndex: 0 }}
				animate={{
					x: position.x * 0.5,
					y: position.y * 0.5,
					scale: isHovering ? 0.85 : 0.8,
				}}
				transition={{
					type: "spring",
					stiffness: 150,
					damping: 15,
				}}
			/>

			{/* The actual card */}
			<motion.div
				ref={cardRef}
				className=" inset-0 shadow-md overflow-hidden cursor-pointer"
				animate={{
					x: position.x,
					y: position.y,
					scale: isHovering ? 1.02 : 1,
				}}
				transition={{
					type: "spring",
					stiffness: 150,
					damping: 20,
				}}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{children}
			</motion.div>
		</div>
	);
};
