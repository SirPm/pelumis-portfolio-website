import { ProgressBar } from "@/components/progress-bar/ProgressBar";
import React from "react";
import { ITechSkillProps } from "./types";

export const TechSkill = (props: ITechSkillProps) => {
	const { techSkill } = props;

	return (
		<div>
			<div className="flex justify-between mb-2 text-[0.9rem] font-medium">
				{techSkill.name}
			</div>
			<ProgressBar progress={techSkill.progress} />
		</div>
	);
};
