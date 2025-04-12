import React from "react";
import styles from "./About.module.css";
import {
	BACK_END_TECH_SKILLS,
	EXPERTISE_LIST,
	FRONT_END_TECH_SKILLS,
} from "./consts";
import { TechSkill } from "@/components/tech-skill/TechSkill";

export const About = () => {
	return (
		<div className="bg-charcoal">
			<section
				id="about"
				className={`relative overflow-hidden global-container ${styles["about-section"]}`}
			>
				<div className="section-container grid grid-cols-2 gap-16 items-center">
					<div>
						<div className="text-[0.9rem] uppercase tracking-[2px] text-teal mb-4 font-semibold">
							About
						</div>
						<h2 className="font-bold text-4xl mb-6 leading-10 tracking-[-0.5px]">
							Solving complex&nbsp;
							<span className="text-teal">problems</span> with
							elegant solutions
						</h2>
						<p className="text-xl font-light mb-6">
							I'm a full-stack developer specializing in creating
							exceptional digital experiences that combine
							technical excellence with user-centered design.
						</p>

						<div className="mb-8">
							<p className="mb-4 leading-[1.7] text-[1rem] text-silver opacity-90">
								With over 5 years of industry experience, I've
								developed enterprise-grade applications with a
								focus on accessibility, performance, and
								scalability. My approach combines strategic
								thinking with technical expertise to deliver
								solutions that drive business growth.
							</p>
							<p className="mb-4 leading-[1.7] text-[1rem] text-silver opacity-90">
								I'm particularly passionate about making the web
								accessible to everyone and creating B2B
								solutions that transform how businesses operate.
							</p>
						</div>

						<div className="">
							<h3 className="text-[1.2rem] font-semibold mb-6 text-silver">
								Areas of Expertise
							</h3>
							<div className="grid grid-cols-2 gap-6">
								{EXPERTISE_LIST.map(({ id, name, icon }) => (
									<div
										key={id}
										className="flex items-center gap-4"
									>
										<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0cffe119] text-teal">
											{icon}
										</div>
										<h4 className="text-[1rem] font-medium text-silver">
											{name}
										</h4>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="bg-[#1a1a2e80] relative backdrop-blur-[10px] rounded-2xl p-10 border border-[#f0f0f00d] z-[1]">
							<div className="mb-8">
								<h4 className="text-[1rem] font-semibold mb-5 text-silver">
									Frontend
								</h4>
								<div className="flex flex-col gap-5">
									{FRONT_END_TECH_SKILLS.map(
										(frontEndTechSkill) => (
											<TechSkill
												key={frontEndTechSkill.id}
												techSkill={frontEndTechSkill}
											/>
										)
									)}
								</div>
							</div>

							<div className="mb-8">
								<h4 className="text-[1rem] font-semibold mb-5 text-silver">
									Backend
								</h4>
								<div className="flex flex-col gap-5">
									{BACK_END_TECH_SKILLS.map(
										(backEndTechSkill) => (
											<TechSkill
												key={backEndTechSkill.id}
												techSkill={backEndTechSkill}
											/>
										)
									)}
								</div>
							</div>

							<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
								<div className="floating-shape shape1"></div>
								<div className="floating-shape shape2"></div>
								<div className="floating-shape shape3"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
