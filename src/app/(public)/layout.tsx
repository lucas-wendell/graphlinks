export const metadata = {
	title: 'login',
	description: 'Login page to create a graphlink account',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
