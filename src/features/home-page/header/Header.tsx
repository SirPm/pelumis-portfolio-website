import { Button } from "../../../components/styled-components/button";
import { Title, TagLine, ScrollIndicator } from "./styled-components";
import styles from "./Header.module.css";
import Link from "next/link";
import { MY_EMAIL } from "@/utils/constants";
import { NavBar } from "@/components/nav-bar/NavBar";

export const Header = () => {
	return (
		<header
			className={`h-screen w-full flex items-center flex-col relative overflow-hidden ${styles["header-container"]}`}
		>
			<NavBar />
			<div
				className={`global-container flex items-center h-[calc(100vh-176px)]`}
			>
				<div className="section-container !p-0 relative z-[1]">
					<Title className="subtle-glitch">
						I&apos;m&nbsp;
						<span className="gradient-text">Pelumi Odumosu</span>
						<br />
						I create digital experiences <br />
						with&nbsp;
						<span className="inline-block gradient-text relative">
							purpose
						</span>
						&nbsp;and precision
					</Title>
					<TagLine>
						Frontend engineer crafting&nbsp;
						<span className="font-medium">fast</span>, intuitive
						interfaces through&nbsp;
						<span className="font-medium">clean code</span>
						&nbsp;and&nbsp;
						<span className="font-medium">
							scalable design systems.
						</span>
					</TagLine>
					<div className="flex flex-col w-full max-w-[70%] md:max-w-fit md:flex-row mt-8 gap-6">
						<Button
							variant="primary"
							className="w-full md:w-fit"
						>
							<Link href="#projects">View My Projects</Link>
						</Button>
						<Button
							variant="tertiary"
							className="w-full md:w-fit"
						>
							<Link href={`mailto:${MY_EMAIL}`}>
								Get In Touch
							</Link>
						</Button>
					</div>
				</div>
			</div>

			<ScrollIndicator>
				<span>Scroll</span>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="animate-[var(--float-down-2)]"
				>
					<path
						d="M12 5V19"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M19 12L12 19L5 12"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</ScrollIndicator>
		</header>
	);
};
