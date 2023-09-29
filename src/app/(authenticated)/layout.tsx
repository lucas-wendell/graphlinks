import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

import Providers from './Providers';
import { redirect } from 'next/navigation';
import Navbar from './components/NavbarAdmin/Navbar';

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
	/* 
	if (!session) {
		redirect('/login');
	} */
	return (
		<Providers>
			<div className="min-w-screen min-h-screen bg-french-gray/50">
				<Navbar />
				{children}
			</div>
		</Providers>
	);
}
