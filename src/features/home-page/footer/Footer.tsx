import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer-container w-full text-text-primary py-12 relative overflow-hidden">
			{/* Background gradient shapes */}
			<div className="footer-shapes">
				<div className="footer-shape footer-shape-1"></div>
				<div className="footer-shape footer-shape-2"></div>
				<div className="footer-shape footer-shape-3"></div>
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
							Last updated: 2025
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
