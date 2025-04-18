"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { styled, keyframes } from "@mui/material";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const twinkle = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.5) rotate(180deg);
  }
`;

const launch = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100vh);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StarIcon = styled(FaStar)({
	color: "var(--silver)",
	animation: `${twinkle} 2s infinite`,
	position: "absolute",
	fontSize: "1rem",
});

const RocketImage = styled(Image)({
	transition: "transform 0.3s ease, filter 0.3s ease",
	cursor: "pointer",
	"&:hover": {
		transform: "translateY(-10px)",
		filter: "brightness(1.2) drop-shadow(0 0 10px orange)",
	},
	"&.launching": {
		animation: `${launch} 1s forwards`,
		cursor: "default",
	},
});

const Overlay = styled("div")({
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	background: "var(--dark-charcoal)",
	zIndex: 1000,
	animation: `${fadeIn} 0.5s forwards, ${fadeOut} 0.5s 2.5s forwards`,
	pointerEvents: "none",
});

// More randomly distributed star positions
const STAR_POSITIONS = [
	{ left: "10%", top: "15%" },
	{ left: "25%", top: "5%" },
	{ left: "40%", top: "20%" },
	{ left: "55%", top: "10%" },
	{ left: "70%", top: "25%" },
	{ left: "85%", top: "15%" },
	{ left: "15%", top: "35%" },
	{ left: "30%", top: "45%" },
	{ left: "45%", top: "30%" },
	{ left: "60%", top: "40%" },
	{ left: "75%", top: "35%" },
	{ left: "90%", top: "45%" },
	{ left: "5%", top: "55%" },
	{ left: "20%", top: "65%" },
	{ left: "35%", top: "50%" },
	{ left: "50%", top: "60%" },
	{ left: "65%", top: "55%" },
	{ left: "80%", top: "65%" },
	{ left: "95%", top: "50%" },
	{ left: "10%", top: "75%" },
	{ left: "25%", top: "85%" },
	{ left: "40%", top: "70%" },
	{ left: "55%", top: "80%" },
	{ left: "70%", top: "75%" },
	{ left: "85%", top: "85%" },
	{ left: "15%", top: "95%" },
	{ left: "30%", top: "90%" },
	{ left: "45%", top: "95%" },
	{ left: "60%", top: "90%" },
	{ left: "75%", top: "95%" },
];

export const SpaceLaunch = () => {
	const [isLaunching, setIsLaunching] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);
	const spaceLaunchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIsMounted(true);

		const handleScroll = () => {
			if (!spaceLaunchRef.current) return;

			const scrollPosition = window.scrollY + window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const spaceLaunchTop = spaceLaunchRef.current.offsetTop;
			const threshold = 100; // pixels from bottom to trigger auto-scroll

			// If we're near the bottom but not at the space launch section
			if (
				scrollPosition > documentHeight - threshold &&
				scrollPosition < spaceLaunchTop
			) {
				window.scrollTo({
					top: spaceLaunchTop - window.innerHeight,
					behavior: "smooth",
				});
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLaunch = () => {
		setIsLaunching(true);
		setShowOverlay(true);

		// Start the scroll after a short delay to allow the rocket to move up
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 1000);

		// Reset everything after 3 seconds
		setTimeout(() => {
			setIsLaunching(false);
			setShowOverlay(false);
		}, 3000);
	};

	if (!isMounted) {
		return null;
	}

	return (
		<div
			ref={spaceLaunchRef}
			className="min-h-screen bg-charcoal flex flex-col items-center justify-center relative overflow-hidden"
		>
			<div className="relative z-10 text-center px-4">
				<p className="text-silver mb-8 text-2xl">
					Time to defy gravity 😌! Tap the rocket to rise again 😎.
				</p>
				<div className="relative flex justify-center items-center rocket-container">
					<RocketImage
						src="/assets/svgs/rocket.svg"
						alt="Rocket"
						width={400}
						height={400}
						onClick={handleLaunch}
						className={isLaunching ? "launching" : ""}
					/>
				</div>
			</div>

			{/* Overlay with stars - only shown during launch */}
			{showOverlay && (
				<Overlay>
					<div className="absolute inset-0">
						{STAR_POSITIONS.map((position, i) => (
							<StarIcon
								key={i}
								style={{
									...position,
									animationDelay: `${(i * 0.1) % 2}s`,
								}}
							/>
						))}
					</div>
				</Overlay>
			)}
			<Link
				href="https://storyset.com/rocket"
				target="_blank"
				rel="noopener noreferrer"
				className="absolute bottom-3 text-sm"
			>
				Rocket illustrations by Storyset
			</Link>
		</div>
	);
};
