"use client";

import { StyledLink } from "@/features/home-page/header/styled-components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatedLogo } from "../AnimatedLogo";
import { Button } from "../styled-components/button";
import { MY_EMAIL } from "@/utils/constants";
import {
	Hamburger,
	HamburgerLine,
	MobileNav,
	MobileNavLinks,
	MobileNavItem,
	MobileNavButton,
	Overlay,
	DesktopNav,
} from "./styled-components";

// TODO: Add a link to the contact page when it's created
// Navigation links array for reuse
const navLinks = [
	{ href: "#projects", text: "Projects" },
	{ href: "#about", text: "About" },
	{ href: "#experience", text: "Experience" },
	// { href: "#contact", text: "Contact" },
];

export const NavBar = () => {
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
		<>
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
				<Link
					href="/"
					className="font-bold text-[1.25rem] text-silver no-underline flex items-center gap-2 cursor-pointer"
				>
					<AnimatedLogo />
				</Link>
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
								<StyledLink
									href={link.href}
									onClick={closeMenu}
								>
									{link.text}
								</StyledLink>
							</MobileNavItem>
						))}
					</ol>
					<MobileNavButton>
						<Button
							variant="primary"
							onClick={closeMenu}
						>
							<Link href={`mailto:${MY_EMAIL}`}>
								Get In Touch
							</Link>
						</Button>
					</MobileNavButton>
				</MobileNavLinks>
			</MobileNav>

			{/* Overlay for when mobile menu is open */}
			<Overlay
				isOpen={isMenuOpen}
				onClick={closeMenu}
			/>
		</>
	);
};
