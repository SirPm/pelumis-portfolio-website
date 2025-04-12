import React from "react";
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
	`
			: ""}
`;
