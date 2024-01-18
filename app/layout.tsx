import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// next fonts
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
});

// search engine options
export const metadata: Metadata = {
	title: 'Evently',
	description: 'Evently is a platform for event management.',
	icons: {
		icon: '/assets/images/logo.png',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.variable}>{children}</body>
		</html>
	);
}
