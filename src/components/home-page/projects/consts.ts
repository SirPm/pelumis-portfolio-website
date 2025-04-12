import { IProject, IProjectCategory, ProjectCategory } from "./types";

export const ProjectCategoryTextMap: Record<ProjectCategory, string> = {
	[ProjectCategory.ALL]: "All",
	[ProjectCategory.B2B]: "B2B",
	[ProjectCategory.ACCESSIBILITY]: "Accessibility",
	[ProjectCategory.ECOMMERCE]: "E-commerce",
	[ProjectCategory.FINTECH]: "Fintech",
	[ProjectCategory.SAAS]: "SaaS",
};

export const PROJECT_CATEGORIES: IProjectCategory[] = [
	{
		id: 1,
		name: "All",
		value: ProjectCategory.ALL,
	},
	{
		id: 2,
		name: "B2B",
		value: ProjectCategory.B2B,
	},
	{
		id: 3,
		name: "Accessibility",
		value: ProjectCategory.ACCESSIBILITY,
	},
	{
		id: 4,
		name: "E-commerce",
		value: ProjectCategory.ECOMMERCE,
	},
	{
		id: 5,
		name: "Fintech",
		value: ProjectCategory.FINTECH,
	},
	{
		id: 6,
		name: "SaaS",
		value: ProjectCategory.SAAS,
	},
];

export const PROJECTS: IProject[] = [
	{
		id: 1,
		name: "Enterprise Resource Hub",
		description:
			"Centralized platform connecting business services with automated workflow management.",
		image: "/assets/pngs/earnipay.png",
		category: ProjectCategory.B2B,
		techStack: ["React", "Node.js", "GraphQL"],
		metrics: [
			{ value: "47%", label: "Increase in Client Efficiency" },
			{ value: "3x", label: "ROI for Businesses" },
		],
		link: "#",
		isFeatured: true,
	},
	{
		id: 2,
		name: "Inclusive Content Platform",
		description:
			"WCAG AAA compliant publishing system with adaptive interface for diverse user needs.",
		image: "/assets/pngs/earnipay.png",
		category: ProjectCategory.ACCESSIBILITY,
		techStack: ["Vue.js", "Express", "ARIA"],
		metrics: [
			{
				value: "100%",
				label: "WCAG Compliance",
			},
			{
				value: "89%",
				label: "User Satisfaction",
			},
		],
		link: "#",
		isFeatured: true,
	},
	{
		id: 3,
		name: "Modern Shopping Experience",
		description:
			"High-performance marketplace with personalized shopping journeys.",
		image: "/assets/pngs/earnipay.png",
		category: ProjectCategory.ECOMMERCE,
		techStack: ["Next.js", "Django", "GraphQL"],
		metrics: [],
		link: "#",
	},
	{
		id: 4,
		name: "Smart Transaction Analytics",
		description:
			"Secure financial tracking with AI-driven insights for business spending.",
		image: "/assets/pngs/earnipay.png",
		category: ProjectCategory.FINTECH,
		techStack: ["React", "Node.js", "Python"],
		metrics: [],
		link: "#",
	},
	{
		id: 5,
		name: "Team Collaboration Suite",
		description:
			"Cloud-based productivity solution with real-time collaboration features.",
		image: "/assets/pngs/earnipay.png",
		category: ProjectCategory.SAAS,
		techStack: ["Angular", "Firebase", "Node.js"],
		metrics: [],
		link: "#",
	},
];
