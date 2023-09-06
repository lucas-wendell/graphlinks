import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import NextAuthSessionProvider from './providers/sessionProvider';

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
	return (
		<html
			lang="en"
			className={`${jetBrains_Mono.variable} font-jetBrains tracking-tighter [word-spacing:-3px] selection:bg-dark-spring-green selection:text-ghost-gray`}
		>
			<body>
				<NextAuthSessionProvider>{children}</NextAuthSessionProvider>
			</body>
		</html>
	);
}
