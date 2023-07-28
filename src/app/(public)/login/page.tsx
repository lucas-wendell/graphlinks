import React from 'react';
import Image from 'next/image';
import Form from '../components/Form/Form';

const Login: React.FC = () => {
	return (
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
				<div className="mt-20">
					<div className="text-center text-gunmetal">
						<h1 className="text-5xl [word-spacing:-20px] font-semibold uppercase max-md-phone:text-4xl max-md-phone:[word-spacing:-5px]">
							Welcome back
						</h1>
						<p className="max-md-phone:text-sm">Log in to your Graphlinks</p>
					</div>
				</div>
				<Form />
			</section>
			<aside className="max-sm:hidden grow">
				<figure className="flex items-center justify-center bg-electric-indigo w-full h-full"></figure>
			</aside>
		</main>
	);
};

export default Login;
