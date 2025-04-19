"use client";

import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

export const StyledLink = styled(Link)`
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
	color: var(--teal);

	&:hover {
		opacity: 1;
		color: var(--teal);
	}
`;
