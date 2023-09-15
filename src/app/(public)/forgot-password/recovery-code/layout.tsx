export const metadata = {
	title: 'Graphlinks | Recovery Code',
	description:
		'Recover your Graphlinks password and connect your world again!!',
};

export type RecoveryCodeProps = {
	children: React.ReactNode;
};

export default async function RecoveryCode({ children }: RecoveryCodeProps) {
	return (
		<div className="min-w-screen min-h-screen overflow-hidden relative">
			{children}
		</div>
	);
}
