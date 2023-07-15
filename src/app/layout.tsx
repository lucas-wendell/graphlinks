'use client';

import './globals.css';
import { routeIsPublic } from '../functions/index';

import { usePathname } from 'next/navigation';
import PrivateRoute from './components/PrivateRoute';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isPublicPage = routeIsPublic(pathname);

	return (
		<html lang="en">
			<body>
				{isPublicPage && children}
				{!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
			</body>
		</html>
	);
}
