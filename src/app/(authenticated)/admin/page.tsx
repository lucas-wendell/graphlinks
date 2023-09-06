import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const Admin: React.FC = async () => {
	const session = await getServerSession(authOptions);
	console.log('session ---->', session);

	return <h1>admin</h1>;
};

export default Admin;
