import React from 'react';
import Image from 'next/image';

const Login: React.FC = () => {
	return (
		<main className="flex w-screen h-screen">
			<section className="bg-blue-300 basis-9/12 p-5 relative">
				<Image
					className="absolute"
					src={'/assets/logo.svg'}
					alt="graphlinks logo"
					width={120}
					height={120}
				/>
			</section>
			<aside className="grow">
				<figure className="bg-blue-700 w-full h-full">figure</figure>
			</aside>
		</main>
	);
};

export default Login;
