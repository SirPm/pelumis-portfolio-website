"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	const [footerRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.1,
		rootMargin: "50px 0px 0px 0px",
		direction: "bottom",
	});

	useEffect(() => {
		if (isIntersecting && footerRef.current) {
			footerRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [isIntersecting, footerRef]);

	return (
		<footer
			className="w-full text-text-primary py-12 relative overflow-hidden footer-container h-screen flex items-end justify-center"
			ref={footerRef}
		>
			{/* Background gradient shapes */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute w-[200px] h-[200px] rounded-full blur-[40px] opacity-10 bg-primary top-[-50px] right-[-50px] animate-float" />
				<div className="absolute w-[150px] h-[150px] rounded-full blur-[40px] opacity-10 bg-silver bottom-[-30px] left-[-30px] animate-float-reverse" />
				<div className="absolute w-[100px] h-[100px] rounded-full blur-[40px] opacity-10 bg-tertiary bottom-[50px] right-[50px] animate-float-slow" />
			</div>

			<div className="footer-content container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="text-sm text-text-secondary">
							© {currentYear} Pelumi Odumosu. All rights reserved.
						</p>
					</div>
					<div className="flex space-x-6">
						<Link
							href="https://github.com/SirPm"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary transition-colors"
							title="View Pelumi's Github profile"
						>
							<FaGithub
								size={24}
								className="teal-hover"
							/>
						</Link>
						<Link
							href="https://www.linkedin.com/in/oluwapm"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary transition-colors"
							title="View Pelumi's LinkedIn profile"
						>
							<FaLinkedin
								size={24}
								className="teal-hover"
							/>
						</Link>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p className="text-text-secondary text-sm">
						Built with Next.js, TypeScript and Tailwind CSS
					</p>
					<div className="mt-4 flex justify-center space-x-4">
						<span className="text-xs text-text-secondary">
							Version 1.0.0
						</span>
						<span className="text-xs text-text-secondary">•</span>
						<span className="text-xs text-text-secondary">
							Last updated: {new Date().getFullYear()}
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
