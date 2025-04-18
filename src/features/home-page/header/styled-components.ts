import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const DesktopNav = styled("ul")`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StyledLink = styled("a")`
	color: var(--silver);
	text-decoration: none;
	font-weight: 500;
	font-size: 1rem;
	position: relative;
	transition: color 0.3s ease;

	&:hover {
		color: var(--teal);

		&::after {
			transform: scaleX(1);
			transform-origin: left;
		}
	}

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		background: var(--teal);
		left: 0;
		bottom: -4px;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.3s ease;
	}
`;

export const Title = styled("h1")`
	font-weight: 700;
	font-size: clamp(2.5rem, 5vw, 3.5rem);
	line-height: 1.2;
	margin-bottom: 1.5rem;
	letter-spacing: -0.5px;

	@media screen and (max-width: 600px) {
		font-size: 30px;
	}
`;

export const TagLine = styled("p")`
	font-size: clamp(1.1rem, 2vw, 1.3rem);
	font-weight: 300;
	margin-bottom: 2.5rem;
	max-width: 600px;
	opacity: 0.9;

	@media screen and (max-width: 768px) {
		max-width: 100%;
	}

	@media screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

export const ScrollIndicator = styled(Box)`
	position: absolute;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	opacity: 0.7;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		opacity: 1;
		color: var(--teal);
	}
`;

// Mobile Navigation Components
export const MobileNav = styled("aside")<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 75vw;
	max-width: 400px;
	background-color: #1a1a2e;
	box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
	display: flex;
	flex-direction: column;
	padding: 2rem;
	z-index: 20;
	transform: ${(props) =>
		props.isOpen ? "translateX(0)" : "translateX(100%)"};
	transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const MobileNavLinks = styled("nav")`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const MobileNavItem = styled("li")`
	margin: 1.5rem 0;
	font-size: 1.2rem;
	counter-increment: item;
	list-style: none;
	display: flex;
	align-items: center;
`;

export const MobileNavNumber = styled("span")`
	margin-right: 0.5rem;
	font-size: 0.9rem;
	color: var(--teal);
	font-family: monospace;
`;

export const MobileNavLink = styled("a")`
	color: var(--silver);
	text-decoration: none;
	font-weight: 600;
	font-size: 1.5rem;
	transition: color 0.3s ease;

	&:hover {
		color: var(--teal);
	}
`;

export const MobileNavButton = styled("div")`
	margin-top: 3rem;
`;

export const Overlay = styled("div")<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Hamburger = styled.button`
	display: none;
	position: fixed;
	top: 52px;
	right: 2rem;
	width: 30px;
	height: 20px;
	cursor: pointer;
	z-index: 1000;
	background-color: transparent;
	border: none;
	padding: 6px;
	filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.3));

	&:hover span {
		background-color: var(--teal);
	}

	@media screen and (max-width: 768px) {
		display: block;
	}
`;

export const HamburgerLine = styled.span<{ isActive: boolean }>`
	background-color: #ffffff;
	display: block;
	height: 2px;
	border-radius: 4px;
	width: 100%;
	position: absolute;
	transition: all 0.3s ease;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);

	&:nth-of-type(1) {
		top: 0;
		${({ isActive }) =>
			isActive &&
			`
      transform: rotate(45deg);
      top: 8.5px;
    `}
	}

	&:nth-of-type(2) {
		top: 8.5px;
		${({ isActive }) => isActive && `opacity: 0;`}
	}

	&:nth-of-type(3) {
		top: 17px;
		${({ isActive }) =>
			isActive &&
			`
      transform: rotate(-45deg);
      top: 8.5px;
    `}
	}
`;
