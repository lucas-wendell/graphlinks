export const metadata = {
	title: 'Graphlinks | Forgot Password',
	description:
		'Recover your Graphlinks password and connect your world again!!',
};

export type ForgotPasswordProps = {
	children: React.ReactNode;
};

export default async function ForgotPassword({
	children,
}: ForgotPasswordProps) {
	return (
		<div className="min-w-screen min-h-screen overflow-hidden relative">
			{children}
		</div>
	);
}
