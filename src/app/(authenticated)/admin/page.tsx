import React from 'react';
import AddLink from '../components/AddLink/AddLink';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import Links from '../components/Links/Links';
import { redirect } from 'next/navigation';

const Admin: React.FC = async () => {
	const session = await getServerSession(authOptions);
	console.log('session ---->', session);

	if (!session) {
		redirect('/login');
	}

	return (
		<>
			<AddLink />
			<Links />
		</>
	);
};

export default Admin;
