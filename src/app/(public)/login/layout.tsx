export const metadata = {
	title: 'Login',
	description: 'Login with your graphlink account',
};

export type LoginLayoutProps = {
	children: React.ReactNode;
};

export default async function LoginLayout({ children }: LoginLayoutProps) {
	return (
		<div className="min-w-screen min-h-screen overflow-hidden relative">
			{children}
		</div>
	);
}
