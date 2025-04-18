export enum ProjectCategory {
	ALL = "all",
	B2B = "b2b",
	ACCESSIBILITY = "accessibility",
	ECOMMERCE = "ecommerce",
	FINTECH = "fintech",
	SAAS = "saas",
	UI_UX = "ui/ux",
}

export interface IProjectCategory {
	id: number;
	name: string;
	value: ProjectCategory;
}

export interface IProject {
	id: string;
	name: string;
	category: ProjectCategory;
	image: string;
	description: string;
	techStack: string[];
	metrics: {
		value: string;
		label: string;
	}[];
	link: string;
	isFeatured?: boolean;
	githubLink?: string;
}
