import { IProject, IProjectCategory, ProjectCategory } from "./types";

export const ProjectCategoryTextMap: Record<ProjectCategory, string> = {
	[ProjectCategory.ALL]: "All",
	[ProjectCategory.B2B]: "B2B",
	[ProjectCategory.ACCESSIBILITY]: "Accessibility",
	[ProjectCategory.ECOMMERCE]: "E-commerce",
	[ProjectCategory.FINTECH]: "Fintech",
	[ProjectCategory.SAAS]: "SaaS",
	[ProjectCategory.UI_UX]: "UI/UX",
};

export enum ProjectLink {
	EARNIPAY_B2B = "https://business.earnipay.com",
	EQUALLY_AI = "https://equally.ai",
	INBRANDED = "https://inbranded.co",
	EARNIPAY_WEBSITE = "https://earnipay.com",
	PELZ_MOVIES = "https://pelzmovies.netlify.app",
	ALT_MALL = "https://altmall.ng",
}

export enum GitHubLink {
	PELZ_MOVIES = "https://github.com/SirPm/pelzmovies",
}

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
	{
		id: 7,
		name: "UI/UX",
		value: ProjectCategory.UI_UX,
	},
];

export const PROJECTS: IProject[] = [
	{
		id: "m9mhxk4jc85ob",
		name: "Earnipay",
		description:
			"A financial management platform for Nigerian SMEs, featuring high-yield accounts, flexible credit, payment solutions, payroll, and on-demand pay via a unified dashboard. It boosts efficiency, cash flow, and growth.",
		image: "/assets/pngs/b2b-earnipay.png",
		categories: [ProjectCategory.FINTECH, ProjectCategory.B2B],
		techStack: ["React", "Redux", "Tailwind CSS"],
		link: ProjectLink.EARNIPAY_B2B,
		isFeatured: true,
	},
	{
		id: "m9mhymowa3i2k",
		name: "Equally AI",
		description:
			"A no-code platform that simplifies website accessibility with AI-powered tools, ensuring ADA and WCAG compliance for inclusive user experiences, requiring minimal technical setup.",
		image: "/assets/pngs/equally-ai.png",
		categories: [ProjectCategory.ACCESSIBILITY],
		techStack: [
			"React",
			"Redux Toolkit",
			"TypeScript",
			"styled-components",
		],
		link: ProjectLink.EQUALLY_AI,
		isFeatured: true,
	},
	{
		id: "m9mhy7e04kre8",
		name: "InBranded",
		description:
			"A platform for brand engagement, offering tools to create personalized image campaigns, automate email marketing, and streamline audience interactions, driving conversions and growth.",
		image: "/assets/pngs/inbranded-design-builder.png",
		categories: [ProjectCategory.SAAS],
		techStack: ["React", "TypeScript", "Redux", "SCSS", "MUI"],
		link: ProjectLink.INBRANDED,
		isFeatured: true,
	},
	{
		id: "m9mhyya3u2kh5",
		name: "Earnipay Website",
		description:
			"A responsive promo website for Earnipay, a fintech platform that allows employees to access their earned wages on demand, enhancing financial flexibility and wellness. And also for businesses to grow and scale.",
		image: "/assets/pngs/earnipay-website.png",
		categories: [ProjectCategory.UI_UX],
		techStack: ["React", "Tailwind CSS"],
		link: ProjectLink.EARNIPAY_WEBSITE,
	},
	{
		id: "m9mi2hwkp69r5",
		name: "Pelz Movies",
		description:
			"A movie list platform with a user-friendly interface and detailed movie information for movie enthusiasts.",
		image: "/assets/pngs/pelzmovies.png",
		categories: [ProjectCategory.UI_UX],
		techStack: ["React", "Redux", "SCSS"],
		link: ProjectLink.PELZ_MOVIES,
		githubLink: GitHubLink.PELZ_MOVIES,
	},
	{
		id: "m9mi2v85xzghh",
		name: "Altmall",
		description: `An e-commerce platform offering a wide range of products with flexible "Buy Now, Pay Later" options at 0% interest, enabling affordable shopping and personalized sourcing for customers.`,
		image: "/assets/pngs/altmall.png",
		categories: [ProjectCategory.ECOMMERCE],
		techStack: ["React", "Redux Toolkit", "styled-components", "MUI"],
		link: ProjectLink.ALT_MALL,
	},
];
