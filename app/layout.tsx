import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  	title: "Todo List"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-sky-300">
				{children}
			</body>
		</html>
	);
}
