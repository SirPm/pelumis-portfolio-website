import { IExpertise } from "./types";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import { ITechSkill } from "@/components/tech-skill/types";

export const EXPERTISE_LIST: IExpertise[] = [
	{
		id: 1,
		name: "Frontend Development",
		icon: <LanguageRoundedIcon />,
	},
	{
		id: 2,
		name: "Web Accessibility",
		icon: <AccessibilityNewRoundedIcon />,
	},
	{
		id: 3,
		name: "Performance Optimization",
		icon: <ControlPointRoundedIcon />,
	},
	{
		id: 4,
		name: "UI/UX Design",
		icon: <BrushRoundedIcon />,
	},
];

export const FRONT_END_TECH_SKILLS: ITechSkill[] = [
	{
		id: 1,
		name: "React",
		progress: 95,
	},
	{
		id: 2,
		name: "Next.js",
		progress: 92,
	},
	{
		id: 3,
		name: "TypeScript",
		progress: 90,
	},
	{
		id: 4,
		name: "Tailwind CSS",
		progress: 90,
	},
];

export const BACK_END_TECH_SKILLS: ITechSkill[] = [
	{
		id: 1,
		name: "Node.js",
		progress: 50,
	},
	{
		id: 2,
		name: "Express.js",
		progress: 50,
	},
	/* {
		id: 3,
		name: "GraphQL",
		progress: 85,
	}, */
	{
		id: 4,
		name: "MongoDB",
		progress: 50,
	},
];
