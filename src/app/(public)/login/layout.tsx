export const metadata = {
	title: 'Graphlinks | Login',
	description: 'Login with your Graphlinks account',
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
