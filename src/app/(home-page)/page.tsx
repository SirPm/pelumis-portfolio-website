import { Header } from "@/features/home-page/header/Header";
import { Projects } from "@/features/home-page/projects/Projects";
import { About } from "@/features/home-page/about/About";
import { Experience } from "@/features/home-page/experience/Experience";
import { Footer } from "@/features/home-page/footer/Footer";
import { SpaceLaunch } from "@/features/home-page/footer/SpaceLaunch";

export default function Home() {
	return (
		<>
			<Header />
			<Projects />
			<About />
			<Experience />
			<Footer />
			<SpaceLaunch />
		</>
	);
}
