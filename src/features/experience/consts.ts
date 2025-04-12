import { IExperience } from "./types";

export const EXPEERIENCE_DATA: IExperience[] = [
	{
		id: 1,
		company: "TechFlow Solutions",
		jobTitle: "Senior Full Stack Developer",
		startDate: "Jan 2023",
		endDate: "Present",
		description:
			"Leading development of enterprise B2B platforms with a focus on accessibility compliance and performance optimization. Implemented microservices architecture that improved system reliability by 40%.",
		techStack: ["React", "Node.js", "AWS", "Accessibility"],
		isCurrentJob: true,
	},
	{
		id: 2,
		company: "FinEdge Technologies",
		jobTitle: "Frontend Developer",
		startDate: "Jan 2021",
		endDate: "Dec 2023",
		description:
			"Developed user interfaces for financial technology applications serving over 200,000 users. Created a component library that reduced development time by 30% while ensuring full WCAG compliance.",
		techStack: ["Angular", "TypeScript", "HTML", "CSS"],
	},
	{
		id: 3,
		company: "E-Commerce Solutions Inc.",
		jobTitle: "Full Stack Developer",
		startDate: "Jan 2019",
		endDate: "Dec 2021",
		description:
			"Engineered e-commerce platforms handling $1.2M in monthly transactions. Implemented performance optimizations that reduced page load times by 65% and increased conversion rates by 22%.",
		techStack: ["React", "Express", "MongoDB", "E-commerce"],
	},
	{
		id: 4,
		company: "Digital Creations Studio",
		jobTitle: "Junior Web Developer",
		startDate: "Jan 2018",
		endDate: "Dec 2019",
		description:
			"Created responsive websites and web applications for diverse clients. Specialized in transforming design mockups into pixel-perfect interfaces with exceptional attention to detail.",
		techStack: ["HTML/CSS", "JavaScript", "WordPress", "UI Design"],
	},
];
