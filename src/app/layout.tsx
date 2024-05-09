import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import Hr from "@/app/components/Hr";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Tejasva Jaitly",
	description: "Tejasva(Neil) jaitly's website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} mx-auto min-h-screen w-full max-w-screen-lg bg-white p-4 dark:bg-black sm:p-10`}
			>
				<Providers>
					<Header />
					<Hr />
					<section className='my-36'>{children}<Analytics /></section>
					<Hr />
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
