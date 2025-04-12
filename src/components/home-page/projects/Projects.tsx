import React from "react";
import { PROJECT_CATEGORIES, ProjectCategoryTextMap, PROJECTS } from "./consts";
import styles from "./Projects.module.css";

export const Projects = () => {
	return (
		<div className="bg-dark-charcoal">
			<section
				id="projects"
				className={`global-container p-[4rem,0] md:py-24 md:px-0 relative overflow-hidden ${styles["projects-section"]}`}
			>
				<div className="relative z-[1]">
					<div className="mb-12 text-center">
						<h2 className="font-bold text-4xl mb-3 tracking-[-0.5px]">
							Featured <span className="text-teal">Projects</span>
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
									id === 1
										? "bg-teal border-teal text-dark-charcoal"
										: ""
								}`}
								data-filter={value}
							>
								{name}
							</button>
						))}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-8">
						{PROJECTS.map(
							({
								id,
								name,
								category,
								image,
								description,
								techStack,
								metrics,
								link,
								isFeatured,
							}) => (
								<div
									className={`bg-[#1a1a2e80] rounded-xl overflow-hidden transition-transform duration-500 ease-in-out relative backdrop-blur-[10px] border border-[#f0f0f00d] transform hover:translate-y-[-10px] hover:transition-all hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] ${
										isFeatured
											? "col-span-1 lg:col-span-2"
											: ""
									}`}
									key={id}
								>
									<div className="w-full h-[240px] relative overflow-hidden">
										<img
											src={image}
											alt={`${name}'s screenshot`}
											className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-[1.05] cursor-pointer"
										/>
										<div className="absolute top-4 right-4 bg-[#000000b3] text-teal py-1.5 px-3 rounded-sm text-sm font-semibold backdrop-blur-[5px]">
											{ProjectCategoryTextMap[category]}
										</div>
									</div>
									<div className="p-6">
										<h3 className="text-[1.3rem] font-semibold mb-3 text-silver">
											{name}
										</h3>
										<p className="text-[0.95rem] mb-5 text-silver opacity-80 leading-[1.6]">
											{description}
										</p>
										<div className="flex gap-3 flex-wrap mb-5">
											{techStack.map((tech, index) => (
												<span
													key={`${tech}-${index}`}
													className="bg-[#0cffe219] text-teal py-1 px-[0.6rem] rounded-sm text-[0.8rem] font-medium"
												>
													{tech}
												</span>
											))}
										</div>
										{metrics.length > 0 && (
											<div className="flex gap-6 mb-6">
												{metrics.map(
													({ value, label }) => (
														<div
															key={`${value}-${label}`}
															className="flex flex-col"
														>
															<span className="text-xl font-bold text-magenta">
																{value}
															</span>
															<span className="text-[0.8rem] text-silver opacity-80">
																{label}
															</span>
														</div>
													)
												)}
											</div>
										)}
										<a
											href={link}
											className={styles["project-link"]}
										>
											View Case Study
										</a>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</div>
	);
};
