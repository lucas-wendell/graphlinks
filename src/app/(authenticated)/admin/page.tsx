import React from 'react';
import AddLink from '../components/AddLink/AddLink';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

const Admin: React.FC = async () => {
	const session = await getServerSession(authOptions);
	console.log('session ---->', session);

	return (
		<main className="flex min-w-screen min-h-screen overflow-hidden bg-french-gray/50">
			<section className="flex flex-col justify-center items-center basis-9/12 max-sm:basis-full relative gap-10 p-3 max-lg:basis-8/12">
				<AddLink />
			</section>
			<aside className="flex items-center justify-center border-l border-french-gray max-sm:hidden grow"></aside>
		</main>
	);
};

export default Admin;
