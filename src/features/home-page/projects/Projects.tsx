"use client";

import React, { useState } from "react";
import { PROJECT_CATEGORIES, ProjectCategoryTextMap, PROJECTS } from "./consts";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import styles from "./Projects.module.css";
import { IProject, ProjectCategory } from "./types";
import { Maybe } from "@/components/Maybe";

export const Projects = () => {
	const [activeFilter, setActiveFilter] = useState<ProjectCategory>(
		ProjectCategory.ALL
	);
	const [projects, setProjects] = useState<IProject[]>(PROJECTS);

	const handleFilter = (evt: React.MouseEvent<HTMLButtonElement>) => {
		const filterValue = evt.currentTarget.getAttribute(
			"data-filter"
		) as ProjectCategory;
		setActiveFilter(filterValue);
		if (filterValue !== ProjectCategory.ALL) {
			const filteredProjects = PROJECTS.filter(
				(project) => project.category === filterValue
			);
			setProjects(filteredProjects);
		} else {
			setProjects(PROJECTS);
		}
	};

	return (
		<div className="bg-dark-charcoal">
			<section
				id="projects"
				className={`global-container relative overflow-hidden ${styles["projects-section"]}`}
			>
				<div className="relative z-[1] section-container">
					<div className="mb-12 text-center">
						<h2 className="font-bold text-4xl mb-3 tracking-[-0.5px]">
							<span className="text-teal">Projects</span>{" "}
							I&apos;ve Worked On
						</h2>
						<p className="text-[1.1rem] text-silver opacity-80 w-full max-w-[600px] my-0 mx-auto">
							Solutions designed with purpose and built with
							precision
						</p>
					</div>

					<div className="flex justify-center flex-wrap gap-3 mb-8 md:mb-12">
						{PROJECT_CATEGORIES.map(({ name, value, id }) => (
							<button
								key={id}
								className={`bg-none border border-[#f0f0f033] py-2 px-5 rounded-[30px] text-silver text-[0.9rem] font-medium cursor-pointer transition-all duration-300 ease-in-out hover:border-[#0cffe1] hover:text-[#0cffe1] ${
									activeFilter === value
										? "bg-teal border-teal text-dark-charcoal hover:bg-transparent"
										: ""
								}`}
								data-filter={value}
								onClick={handleFilter}
							>
								{name}
							</button>
						))}
					</div>

					<Maybe condition={projects.length === 0}>
						<div className="w-full h-[100px] flex justify-center items-center">
							<p className="text-lg font-semibold">
								No projects match the selected filter.
							</p>
						</div>
					</Maybe>
					<Maybe condition={projects.length > 0}>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{projects.map(
								({
									id,
									name,
									category,
									image,
									description,
									techStack,
									link,
									githubLink,
								}) => (
									<div
										className={`bg-[#1a1a2e80] rounded-xl overflow-hidden transition-transform duration-500 ease-in-out relative backdrop-blur-[10px] border border-[#f0f0f00d] transform hover:translate-y-[-10px] hover:transition-all hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] col-span-1 md:col-span-1 lg:col-span-2 h-[550px]`}
										key={id}
									>
										<div className="w-full h-[250px] relative overflow-hidden">
											<img
												src={image}
												alt={`${name}'s screenshot`}
												className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-[1.05] cursor-pointer"
											/>
											<div className="absolute top-4 right-4 bg-[#000000b3] text-teal py-1.5 px-3 rounded-sm text-sm font-semibold backdrop-blur-[5px]">
												{
													ProjectCategoryTextMap[
														category
													]
												}
											</div>
										</div>
										<div className="p-6 flex flex-col h-[300px]">
											<h3 className="text-[1.3rem] font-semibold mb-3 text-silver">
												{name}
											</h3>
											<p
												className={`text-[0.95rem] mb-5 text-silver opacity-80 leading-[1.6] ${styles["project-description"]}`}
											>
												{description}
											</p>
											<div className="flex gap-3 flex-wrap mb-5">
												{techStack.map(
													(tech, index) => (
														<span
															key={`${tech}-${index}`}
															className="bg-[#0cffe219] text-teal py-1 px-[0.6rem] rounded-sm text-[0.8rem] font-medium h-fit"
														>
															{tech}
														</span>
													)
												)}
											</div>
											<div className="flex gap-3 items-center mt-auto">
												{githubLink && (
													<Link
														href={githubLink}
														target="_blank"
														rel="noopener noreferrer"
														title={`View ${name}'s github repository`}
														className={
															styles[
																"project-link"
															]
														}
													>
														<BsGithub className="w-6 h-6" />
													</Link>
												)}
												<Link
													href={link}
													target="_blank"
													rel="noopener noreferrer"
													title={`View ${name} project`}
													className={
														styles["project-link"]
													}
												>
													<HiOutlineExternalLink className="w-7 h-7" />
												</Link>
											</div>
										</div>
									</div>
								)
							)}
						</div>
					</Maybe>
				</div>
			</section>
		</div>
	);
};
