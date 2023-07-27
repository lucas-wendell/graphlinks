import React from 'react';
import Image from 'next/image';
import Form from '../components/Form/Form';

const Login: React.FC = () => {
	return (
		<main className="flex min-w-screen min-h-screen">
			<section className="flex flex-col justify-center items-center bg-ghost-gray basis-9/12 relative gap-10 p-10">
				<Image
					className="left-10 top-10 absolute"
					src={'/assets/logo.svg'}
					alt="graphlinks logo"
					width={120}
					height={120}
				/>
				<div className="mt-20">
					<div className="text-center">
						<h1 className="text-5xl [word-spacing:-20px]">Welcome back</h1>
						<p>Log in to your Graphlinks</p>
					</div>
				</div>
				<Form />
			</section>
			<aside className="grow">
				<figure className="bg-blue-700 w-full h-full">figure</figure>
			</aside>
		</main>
	);
};

export default Login;
