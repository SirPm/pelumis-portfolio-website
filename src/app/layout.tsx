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
		siteName: "Pelumi Odumosu",
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
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png" }],
		other: [
			{
				rel: "icon",
				url: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				rel: "icon",
				url: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
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
