// import Image from "next/image";

import { About } from "@/features/home-page/about/About";
import { Header } from "@/features/home-page/header/Header";
import { Projects } from "@/features/home-page/projects/Projects";

export default function Home() {
	return (
		<>
			<Header />
			<Projects />
			<About />
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
