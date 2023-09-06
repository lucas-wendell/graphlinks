import React from 'react';
import Image from 'next/image';

export type ForgotPasswordProps = {
	searchParams: Record<string, string | null | undefined>;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = async ({
	searchParams,
}) => {
	return (
		<>
			<main className="flex min-w-screen min-h-screen overflow-hidden">
				<section className="flex flex-col justify-center items-center bg-ghost-gray basis-9/12 max-sm:basis-full relative gap-10 p-10 max-lg:basis-8/12">
					<Image
						className="left-10 top-10 absolute"
						src="/assets/logo.svg"
						alt="graphlinks logo"
						width={120}
						height={120}
						placeholder="blur"
						blurDataURL="/assets/logo.svg"
					/>
				</section>
				<aside className="max-sm:hidden grow">
					<figure className="flex items-center justify-center bg-electric-indigo w-full h-full"></figure>
				</aside>
			</main>
		</>
	);
};

export default ForgotPassword;
