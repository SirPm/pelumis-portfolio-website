import { Experience } from "@/features/experience/Experience";
import { About } from "@/features/home-page/about/About";
import { Header } from "@/features/home-page/header/Header";
import { Projects } from "@/features/home-page/projects/Projects";

export default function Home() {
	return (
		<>
			<Header />
			<Projects />
			<About />
			<Experience />
		</>
	);
}
