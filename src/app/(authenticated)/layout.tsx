import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Admin',
	description: 'Admin page from graphlinks.',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/login');
	}
	return <div>{children}</div>;
}
