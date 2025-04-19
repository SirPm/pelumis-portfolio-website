import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/app.css";

const nunito = Nunito({
	subsets: ["latin"],
	variable: "--font-nunito",
});

const WEBSITE_TITLE = "Pelumi Odumosu: Frontend Engineer.";
const WEBSITE_URL = "https://pelumiodumosu.vercel.app";
const WEBSITE_DESCRIPTION =
	"Pelumi Odumosu is a frontend engineer highly skilled at design systems with a passion for creating innovative and scalable solutions.";
const OG_IMAGE = "/assets/pngs/og-image.png";

export const metadata: Metadata = {
	title: WEBSITE_TITLE,
	description: WEBSITE_DESCRIPTION,
	openGraph: {
		type: "website",
		url: WEBSITE_URL,
		title: WEBSITE_TITLE,
		description: WEBSITE_DESCRIPTION,
		images: [
			{
				url: OG_IMAGE,
				width: 1200,
				height: 630,
				alt: "Preview image description",
			},
		],
	},
	twitter: {
		creator: "@OluwaPm",
		card: "summary_large_image",
		title: WEBSITE_TITLE,
		description: WEBSITE_DESCRIPTION,
		images: [OG_IMAGE],
	},
	manifest: "/manifest.json",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.className} antialiased w-full`}>
				{children}
			</body>
		</html>
	);
}
