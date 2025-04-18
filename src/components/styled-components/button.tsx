import { styled } from "@mui/material";
import { IButtonProps } from "./types";

export const Button = styled("button")<IButtonProps>`
	display: inline-block;
	padding: 0.75rem 1.5rem;
	font-weight: 600;
	font-size: 0.95rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
	text-decoration: none;
	letter-spacing: 0.3px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}

	${(props) =>
		props.variant === "primary"
			? `
				background-color: var(--teal);
				color: var(--dark-charcoal);

				&:hover {
					background-color: #00e6ca;
					transform: translateY(-2px);
					box-shadow: 0 6px 15px rgba(12, 255, 225, 0.2);
				}

				&:active {
					transform: translateY(0);
				}
			`
			: props.variant === "secondary"
			? `
				background-color: transparent;
				color: var(--silver);
				border: 1px solid var(--silver);

				&:hover {
					border-color: var(--teal);
					color: var(--teal);
					transform: translateY(-2px);
				}

				&:active {
					transform: translateY(0);
				}
			`
			: props.variant === "tertiary"
			? `
				background: linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%);
				color: var(--silver);
				border: none;

				&:hover {
					filter: brightness(1.1);
					box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
					transform: translateY(-2px);
				}

				&:active {
					transform: translateY(0);
				}
			`
			: ""}
`;
