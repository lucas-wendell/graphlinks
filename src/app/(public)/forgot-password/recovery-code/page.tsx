import React from 'react';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import RecoveryCodeForm from '../../components/RecoveryCodeForm/Form';
import PageFormTemplate from '../../components/PageFormTemplate/PageFormTemplate';

export type RecoveryCodeProps = {
	searchParams: Record<string, string | null | undefined>;
};

const RecoveryCode: React.FC<RecoveryCodeProps> = async ({ searchParams }) => {
	const cookieStore = cookies();
	const email = cookieStore.get('recoveryEmail');

	if (!email) redirect('/forgot-password');

	return (
		<PageFormTemplate>
			<div className="max-sm:text-center w-full text-jet">
				<h1 className="font-bold text-xl ">Enter your recovery code</h1>
				<p className="text-sm">Enter your recovery code to reset password.</p>
			</div>
			<RecoveryCodeForm />
		</PageFormTemplate>
	);
};

export default RecoveryCode;
