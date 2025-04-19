import styled from "@emotion/styled";

export const DesktopNav = styled("ul")`
	@media screen and (max-width: 768px) {
		display: none;
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
	justify-content: center;
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
