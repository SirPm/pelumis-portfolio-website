import React from "react";
import styles from "./Experience.module.css";
import { EXPEERIENCE_DATA } from "./consts";

export const Experience = () => {
	return (
		<div className="bg-dark-charcoal">
			<section
				id="experience"
				className={`relative overflow-hidden global-container ${styles["about-section"]}`}
			>
				<div className="section-container">
					<div className="text-center mb-12 md:mb-20">
						<div className="text-[0.9rem] uppercase tracking-[2px] text-teal mb-4 font-semibold">
							Experience
						</div>
						<h2 className="font-bold text-[1.8rem] md:text-4xl mb-4 tracking-[-0.5px]">
							My professional
							<span className="text-teal">journey</span>
						</h2>
						<p className="text-[1.1rem] text-silver w-full max-w-[600px] my-0 mx-auto">
							Building expertise through challenging projects and
							continuous learning
						</p>
					</div>

					<div className={styles["timeline"]}>
						{EXPEERIENCE_DATA.map(
							({
								id,
								company,
								jobTitle,
								startDate,
								endDate,
								description,
								techStack,
							}) => (
								<div
									className={styles["timeline-item"]}
									key={id}
								>
									<div className={styles["timeline-content"]}>
										<div
											className={styles["timeline-date"]}
										>
											{startDate} - {endDate}
										</div>
										<h3>{jobTitle}</h3>
										<h4>{company}</h4>
										<p>{description}</p>
										<div
											className={styles["timeline-tags"]}
										>
											{techStack.map((tech, index) => (
												<span key={index}>{tech}</span>
											))}
										</div>
										<div className={styles["milestone"]}>
											<div
												className={
													styles["milestone-dot"]
												}
											></div>
											<div
												className={
													styles["milestone-line"]
												}
											></div>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>

				<div className={styles["experience-bg"]}>
					<div className={styles["experience-decoration-1"]} />
					<div className={styles["experience-decoration-2"]} />
				</div>
			</section>
		</div>
	);
};
