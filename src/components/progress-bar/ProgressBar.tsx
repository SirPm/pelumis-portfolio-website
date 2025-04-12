import React from "react";
import { IProgressBarProps } from "./types";
import { Box } from "@mui/material";

export const ProgressBar = (props: IProgressBarProps) => {
	const { progress } = props;

	return (
		<div className="h-1.5 bg-[#f0f0f019] rounded-[50px] overflow-hidden">
			<Box
				className="h-full rounded-[50px] bg-[linear-gradient(90deg,var(--teal),var(--magenta))] w-full"
				sx={{ maxWidth: `${progress}%` }}
			/>
		</div>
	);
};
