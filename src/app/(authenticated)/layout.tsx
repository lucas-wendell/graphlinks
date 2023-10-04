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
			<Navbar />
			<main className="flex min-w-screen min-h-screen overflow-hidden bg-french-gray/50">
				<section className="flex flex-col justify-center items-center basis-9/12 max-sm:basis-full relative gap-10 p-3 pt-28 max-lg:basis-8/12">
					{children}
				</section>
				<aside className="flex items-center justify-center border-l border-french-gray max-sm:hidden grow"></aside>
			</main>
		</Providers>
	);
}
