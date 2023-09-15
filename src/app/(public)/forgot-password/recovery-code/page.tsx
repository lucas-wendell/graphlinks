import React from 'react';
import Image from 'next/image';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import RecoveryCodeForm from '../../components/RecoveryCodeForm/Form';

export type RecoveryCodeProps = {
	searchParams: Record<string, string | null | undefined>;
};

const RecoveryCode: React.FC<RecoveryCodeProps> = async ({ searchParams }) => {
	const cookieStore = cookies();
	const email = cookieStore.get('recoveryEmail');

	if (!email) redirect('/forgot-password');

	return (
		<>
			<main className="flex min-w-screen min-h-screen overflow-hidden">
				<section className="flex flex-col justify-center items-center bg-ghost-gray basis-9/12 max-sm:basis-full max-sm:p-10 relative gap-10 p-20 max-lg:basis-8/12">
					<Image
						className="left-10 top-10 absolute"
						src="/assets/logo.svg"
						alt="graphlinks logo"
						width={120}
						height={120}
						placeholder="blur"
						blurDataURL="/assets/logo.svg"
					/>
					<div className="max-sm:text-center w-full text-jet">
						<h1 className="font-bold text-xl ">Enter your recovery code</h1>
						<p className="text-sm">
							Enter your recovery code to reset password.
						</p>
					</div>
					<RecoveryCodeForm />
				</section>
				<aside className="max-sm:hidden grow">
					<figure className="flex items-center justify-center bg-electric-indigo w-full h-full"></figure>
				</aside>
			</main>
		</>
	);
};

export default RecoveryCode;
