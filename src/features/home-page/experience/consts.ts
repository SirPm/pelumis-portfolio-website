import { IExperience } from "./types";

export const EXPEERIENCE_DATA: IExperience[] = [
	{
		id: 1,
		company: "Netchex",
		jobTitle: "Frontend Engineer",
		startDate: "June 2025",
		endDate: "Present",
		description:
			"Building features for a workflow automation system enabling companies to create and assign onboarding tasks to employees with configurable scheduling. Developed multi-layered approval flows supporting sequential approvals across multiple managers, with role-based skip permissions for org admins. Implemented change request functionality for position and employee information updates, executing automatically at a scheduled date.",
		techStack: [
			"React",
			"TypeScript",
			"Vite",
			"React Query",
			"Vitest",
		],
		isCurrentJob: true,
	},
	{
		id: 2,
		company: "Earnipay",
		jobTitle: "Frontend Engineer",
		startDate: "July 2024",
		endDate: "June 2025",
		description:
			"Leading the frontend development of the B2B platform and admin platform with a focus on security, scalability and performance optimization.",
		techStack: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"React Query",
			"Redux",
		],
	},
	{
		id: 3,
		company: "Equally AI",
		jobTitle: "Frontend Engineer",
		startDate: "June 2022",
		endDate: "July 2024",
		description:
			"Developed a no code accessbility solution (Flowy) that can be used with almost no accessibility knowledge or expertise. Created reusable accessible components that reduced development time while ensuring full WCAG compliance.",
		techStack: [
			"React",
			"TypeScript",
			"Styled Components",
			"Redux Toolkit",
			"MUI",
		],
	},
	{
		id: 4,
		company: "InBranded",
		jobTitle: "Frontend Developer",
		startDate: "March 2021",
		endDate: "June 2022",
		description:
			"Built a design builder with modern technologies and an improved UI and UX. Also re-built the dashboard and made UI improvements to the landing pages.",
		techStack: ["React", "TypeScript", "Redux", "SCSS"],
	},
	{
		id: 5,
		company: "Nation Delivery Services Ltd.",
		jobTitle: "Frontend Developer",
		startDate: "July 2020",
		endDate: "March 2021",
		description:
			"Worked on adding new features and making a crypto website responsive with an easy to use admin portal for managing the dashboard and user activities.",
		techStack: ["HTML/CSS", "JavaScript", "WordPress", "UI Design"],
	},
];
