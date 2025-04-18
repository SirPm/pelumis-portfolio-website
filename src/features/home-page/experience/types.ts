export interface IExperience {
	id: number;
	company: string;
	jobTitle: string;
	startDate: string;
	endDate: string;
	description: string;
	techStack: string[];
	isCurrentJob?: boolean;
}
