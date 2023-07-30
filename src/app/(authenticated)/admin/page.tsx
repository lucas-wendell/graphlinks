import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import React from 'react';

const Admin: React.FC = async () => {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/login');
	}

	return <h1>admin</h1>;
};

export default Admin;
