export const metadata = {
	title: 'Sign up',
	description: 'Create a graphlink account',
};

export type SignUpLayoutProps = {
	children: React.ReactNode;
};

export default async function SignUpLayout({ children }: SignUpLayoutProps) {
	return <div className="min-w-screen min-h-screen">{children}</div>;
}
