export const metadata = {
	title: 'Graphlinks | Sign up',
	description: 'Create a Graphlinks account',
};

export type SignUpLayoutProps = {
	children: React.ReactNode;
};

export default async function SignUpLayout({ children }: SignUpLayoutProps) {
	return <div className="min-w-screen min-h-screen">{children}</div>;
}
