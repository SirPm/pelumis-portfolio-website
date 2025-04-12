// import Image from "next/image";

import { Header } from "@/components/home-page/header/Header";
import { Projects } from "@/components/home-page/projects/Projects";

export default function Home() {
	return (
		<>
			<Header />
			<Projects />

			<section
				id="about"
				className="about"
			>
				<div className="container">
					<div className="about-wrapper">
						<div className="about-content">
							<div className="section-subtitle">About</div>
							<h2>
								Solving complex <span>problems</span> with
								elegant solutions
							</h2>
							<p className="about-lead">
								I'm a full-stack developer specializing in
								creating exceptional digital experiences that
								combine technical excellence with user-centered
								design.
							</p>

							<div className="about-text">
								<p>
									With over 5 years of industry experience,
									I've developed enterprise-grade applications
									with a focus on accessibility, performance,
									and scalability. My approach combines
									strategic thinking with technical expertise
									to deliver solutions that drive business
									growth.
								</p>
								<p>
									I'm particularly passionate about making the
									web accessible to everyone and creating B2B
									solutions that transform how businesses
									operate.
								</p>
							</div>

							<div className="expertise-areas">
								<h3>Areas of Expertise</h3>
								<div className="expertise-grid">
									<div className="expertise-item">
										<div className="expertise-icon">
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M9 12L6 14.5V9.5L9 12Z"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M14 9H16"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
												/>
												<path
													d="M14 15H16"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
												/>
												<path
													d="M14 12H18"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
										</div>
										<h4>Full Stack Development</h4>
									</div>
									<div className="expertise-item">
										<div className="expertise-icon">
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
													stroke="currentColor"
													strokeWidth="2"
												/>
												<path
													d="M12 8V16"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
												/>
												<path
													d="M8 12H16"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
										</div>
										<h4>Web Accessibility</h4>
									</div>
									<div className="expertise-item">
										<div className="expertise-icon">
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M16 8V5L19 2L22 5L19 8H16Z"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M16 8L12 12"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M9 15L3 21"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M6 18L3 21"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M12 12C12 12 9 15 9 15C9 15 7.5 16.5 6 18"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<h4>UI/UX Design</h4>
									</div>
									<div className="expertise-item">
										<div className="expertise-icon">
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M13 2H11C6.02944 2 2 6.02944 2 11V13C2 17.9706 6.02944 22 11 22H13C17.9706 22 22 17.9706 22 13V11C22 6.02944 17.9706 2 13 2Z"
													stroke="currentColor"
													strokeWidth="2"
												/>
												<path
													d="M16 12H8"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
												/>
												<path
													d="M12 16V8"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
										</div>
										<h4>Performance Optimization</h4>
									</div>
								</div>
							</div>
						</div>

						<div className="about-visual">
							<div className="skills-container">
								<div className="skill-group frontend">
									<h4>Frontend</h4>
									<div className="skills">
										<div className="skill">
											<div className="skill-name">
												React
											</div>
											<div className="skill-bar">
												<div
													className="skill-progress"
													style={{ width: "95%" }}
												></div>
											</div>
										</div>
										<div className="skill">
											<div className="skill-name">
												TypeScript
											</div>
											<div className="skill-bar">
												<div
													className="skill-progress"
													style={{ width: "90%" }}
												></div>
											</div>
										</div>
										<div className="skill">
											<div className="skill-name">
												Next.js
											</div>
											<div className="skill-bar">
												<div
													className="skill-progress"
													style={{ width: "92%" }}
												></div>
											</div>
										</div>
										<div className="skill">
											<div className="skill-name">
												Vue
											</div>
											<div className="skill-bar">
												<div
													className="skill-progress"
													style={{ width: "85%" }}
												></div>
											</div>
										</div>
									</div>
								</div>

								<div className="skill-group backend">
									<h4>Backend</h4>
									<div className="skills">
										<div className="skill">
											<div className="skill-name">
												Node.js
											</div>
											<div className="skill-bar">
												<div
													className="skill-progress"
													style={{ width: "88%" }}
												></div>
											</div>
										</div>
										<div className="skill">
											<div className="skill-name">
												Python
											</div>
											<div className="skill-bar">
												<div
													className="skill-progress"
													style={{ width: "85%" }}
												></div>
											</div>
										</div>
										<div className="skill">
											<div className="skill-name">
												GraphQL
											</div>
											<div className="skill-bar">
												<div
													className="skill-progress"
													style={{ width: "80%" }}
												></div>
											</div>
										</div>
										<div className="skill">
											<div className="skill-name">
												PostgreSQL
											</div>
											<div className="skill-bar">
												<div
													className="skill-progress"
													style={{ width: "85%" }}
												></div>
											</div>
										</div>
									</div>
								</div>

								<div className="floating-shapes">
									<div className="floating-shape shape1"></div>
									<div className="floating-shape shape2"></div>
									<div className="floating-shape shape3"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id="experience"
				className="experience"
			>
				<div className="container">
					<div className="section-header">
						<div className="section-subtitle">Experience</div>
						<h2>
							My professional <span>journey</span>
						</h2>
						<p>
							Building expertise through challenging projects and
							continuous learning
						</p>
					</div>

					<div className="timeline">
						<div className="timeline-item">
							<div className="timeline-content">
								<div className="timeline-date">
									2023 - Present
								</div>
								<h3>Senior Full Stack Developer</h3>
								<h4>TechFlow Solutions</h4>
								<p>
									Leading development of enterprise B2B
									platforms with a focus on accessibility
									compliance and performance optimization.
									Implemented microservices architecture that
									improved system reliability by 40%.
								</p>
								<div className="timeline-tags">
									<span>React</span>
									<span>Node.js</span>
									<span>AWS</span>
									<span>Accessibility</span>
								</div>
								<div className="milestone">
									<div className="milestone-dot"></div>
									<div className="milestone-line"></div>
								</div>
							</div>
						</div>

						<div className="timeline-item">
							<div className="timeline-content">
								<div className="timeline-date">2021 - 2023</div>
								<h3>Frontend Developer</h3>
								<h4>FinEdge Technologies</h4>
								<p>
									Developed user interfaces for financial
									technology applications serving over 200,000
									users. Created a component library that
									reduced development time by 30% while
									ensuring full WCAG compliance.
								</p>
								<div className="timeline-tags">
									<span>Vue.js</span>
									<span>TypeScript</span>
									<span>GraphQL</span>
									<span>Fintech</span>
								</div>
								<div className="milestone">
									<div className="milestone-dot"></div>
									<div className="milestone-line"></div>
								</div>
							</div>
						</div>

						<div className="timeline-item">
							<div className="timeline-content">
								<div className="timeline-date">2019 - 2021</div>
								<h3>Full Stack Developer</h3>
								<h4>E-Commerce Solutions Inc.</h4>
								<p>
									Engineered e-commerce platforms handling
									$1.2M in monthly transactions. Implemented
									performance optimizations that reduced page
									load times by 65% and increased conversion
									rates by 22%.
								</p>
								<div className="timeline-tags">
									<span>React</span>
									<span>Express</span>
									<span>MongoDB</span>
									<span>E-commerce</span>
								</div>
								<div className="milestone">
									<div className="milestone-dot"></div>
									<div className="milestone-line"></div>
								</div>
							</div>
						</div>

						<div className="timeline-item">
							<div className="timeline-content">
								<div className="timeline-date">2018 - 2019</div>
								<h3>Junior Web Developer</h3>
								<h4>Digital Creations Studio</h4>
								<p>
									Created responsive websites and web
									applications for diverse clients.
									Specialized in transforming design mockups
									into pixel-perfect interfaces with
									exceptional attention to detail.
								</p>
								<div className="timeline-tags">
									<span>HTML/CSS</span>
									<span>JavaScript</span>
									<span>WordPress</span>
									<span>UI Design</span>
								</div>
								<div className="milestone">
									<div className="milestone-dot"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="experience-bg">
					<div className="experience-decoration-1"></div>
					<div className="experience-decoration-2"></div>
				</div>
			</section>
		</>
	);
}

/*  <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */
