import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Login: React.FC = () => {
	return (
		<main className="flex w-screen h-screen">
			<section className="flex justify-center items-center bg-blue-300 basis-9/12 p-10 relative">
				<Image
					className="left-10 top-10 absolute"
					src={'/assets/logo.svg'}
					alt="graphlinks logo"
					width={120}
					height={120}
				/>
				<div>
					<div className="text-center">
						<h1 className="text-5xl [word-spacing:-20px]">Welcome back</h1>
						<p>Log in to your Linktree</p>
					</div>
				</div>
			</section>
			<aside className="grow">
				<figure className="bg-blue-700 w-full h-full">
					figure
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</figure>
			</aside>
		</main>
	);
};

export default Login;
