import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/app.css";

const nunito = Nunito({
	subsets: ["latin"],
	variable: "--font-nunito",
});

export const metadata: Metadata = {
	title: "Pelumi's Portfolio Website",
	description: "Pelumi Odumosu is a great software developer",
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
