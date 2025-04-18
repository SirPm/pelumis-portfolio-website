import { IExperience } from "./types";

export const EXPEERIENCE_DATA: IExperience[] = [
	{
		id: 1,
		company: "Earnipay",
		jobTitle: "Frontend Engineer",
		startDate: "July 2024",
		endDate: "Present",
		description:
			"Leading the frontend development of the B2B platform and admin platform with a focus on security, scalability and performance optimization.",
		techStack: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"React Query",
			"Redux",
		],
		isCurrentJob: true,
	},
	{
		id: 2,
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
		id: 3,
		company: "InBranded",
		jobTitle: "Frontend Developer",
		startDate: "March 2021",
		endDate: "June 2022",
		description:
			"Built a design builder with modern technologies and an improved UI and UX. Also re-built the dashboard and made UI improvements to the landing pages.",
		techStack: ["React", "TypeScript", "Redux", "SCSS"],
	},
	{
		id: 4,
		company: "Nation Delivery Services Ltd.",
		jobTitle: "Frontend Developer",
		startDate: "July 2020",
		endDate: "March 2021",
		description:
			"Worked on adding new features and making a crypto website responsive with an easy to use admin portal for managing the dashboard and user activities.",
		techStack: ["HTML/CSS", "JavaScript", "WordPress", "UI Design"],
	},
];
