'use client';

import './globals.css';

import { routeIsPublic } from '../functions/index';
import PrivateRoute from './components/PrivateRoute';

import { usePathname } from 'next/navigation';
import { JetBrains_Mono } from 'next/font/google';

const jetBrains_Mono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600'],
	variable: '--font-jetBrains',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isPublicPage = routeIsPublic(pathname);

	return (
		<html
			lang="en"
			className={`${jetBrains_Mono.variable} font-jetBrains tracking-tighter [word-spacing:-3px]`}
		>
			<body>
				{isPublicPage && children}
				{!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
			</body>
		</html>
	);
}
