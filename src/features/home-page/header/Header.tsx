"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../../../components/styled-components/button";
import {
	DesktopNav,
	StyledLink,
	Title,
	TagLine,
	MobileNav,
	MobileNavLinks,
	MobileNavItem,
	MobileNavNumber,
	MobileNavLink,
	MobileNavButton,
	Overlay,
	ScrollIndicator,
	Hamburger,
	HamburgerLine,
} from "./styled-components";
import styles from "./Header.module.css";
import { AnimatedLogo } from "@/components/AnimatedLogo";

// Navigation links array for reuse
const navLinks = [
	{ href: "#projects", text: "Projects" },
	{ href: "#about", text: "About" },
	{ href: "#experience", text: "Experience" },
	{ href: "#contact", text: "Contact" },
];

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	return (
		<header
			className={`h-screen w-full flex items-center flex-col relative overflow-hidden ${styles["header-container"]}`}
		>
			<Hamburger
				aria-label="Toggle mobile menu"
				aria-expanded={isMenuOpen}
				onClick={toggleMenu}
			>
				<HamburgerLine isActive={isMenuOpen} />
				<HamburgerLine isActive={isMenuOpen} />
				<HamburgerLine isActive={isMenuOpen} />
			</Hamburger>

			{/* Desktop Navigation Menu */}
			<nav className="flex justify-between items-center pt-8 global-container">
				<a
					href="/"
					className="font-bold text-[1.25rem] text-silver no-underline flex items-center gap-2 cursor-pointer"
				>
					<AnimatedLogo />
				</a>
				<DesktopNav className="flex list-none gap-8">
					{navLinks.map((link, index) => (
						<li key={index}>
							<StyledLink href={link.href}>
								{link.text}
							</StyledLink>
						</li>
					))}
				</DesktopNav>
			</nav>

			{/* Mobile Navigation Menu */}
			<MobileNav isOpen={isMenuOpen}>
				<MobileNavLinks>
					<ol>
						{navLinks.map((link, index) => (
							<MobileNavItem key={index}>
								<MobileNavNumber>{`0${
									index + 1
								}.`}</MobileNavNumber>
								<MobileNavLink
									href={link.href}
									onClick={closeMenu}
								>
									{link.text}
								</MobileNavLink>
							</MobileNavItem>
						))}
					</ol>
					<MobileNavButton>
						<Button
							variant="primary"
							onClick={closeMenu}
						>
							<a href="#contact">Get In Touch</a>
						</Button>
					</MobileNavButton>
				</MobileNavLinks>
			</MobileNav>

			{/* Overlay for when mobile menu is open */}
			<Overlay
				isOpen={isMenuOpen}
				onClick={closeMenu}
			/>

			<div
				className={`global-container flex items-center h-[calc(100vh-176px)]`}
			>
				<div className="section-container !p-0 relative z-[1]">
					<Title>
						I'm <span className="text-teal">Pelumi Odumosu</span>
						<br />
						I create digital experiences <br />
						with&nbsp;
						<span className="inline-block text-teal relative">
							purpose
						</span>
						&nbsp;and precision
					</Title>
					<TagLine>
						Frontend developer specializing in&nbsp;
						<span className="font-medium text-magenta">
							B2B solutions
						</span>
						&nbsp;and&nbsp;
						<span className="font-medium text-magenta">
							web applications
						</span>
						&nbsp; that deliver exceptional value and user
						experience.
					</TagLine>
					<div className="flex flex-col w-full max-w-[70%] md:max-w-fit md:flex-row mt-8 gap-6">
						<Button
							variant="primary"
							className="w-full md:w-fit"
						>
							<a href="#projects">View My Projects</a>
						</Button>
						<Button
							variant="secondary"
							className="w-full md:w-fit"
						>
							<a href="#contact">Get In Touch</a>
						</Button>
					</div>
				</div>
			</div>

			<ScrollIndicator>
				<span>Scroll</span>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="animate-[var(--float-down-2)]"
				>
					<path
						d="M12 5V19"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M19 12L12 19L5 12"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</ScrollIndicator>
		</header>
	);
};
