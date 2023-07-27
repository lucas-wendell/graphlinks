'use client';

import React from 'react';
import Input from '../Input/Input';

import Link from 'next/link';
import Button from '../Button/Button';

import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';

const Form: React.FC = () => {
	return (
		<form className="w-full">
			<div className="flex flex-col gap-4">
				<Input type="text" placeholder="E-mail" />
				<Input type="password" placeholder="Password" />
				<Link
					className="max-w-fit text-dark-spring-green capitalize underline decoration-dark-spring-green max-md-phone:text-sm"
					href={'https://github.com/lucas-wendell'}
				>
					forgot password?
				</Link>
			</div>
			<div className="flex flex-col items-center justify-center gap-4 mt-8">
				<Button text="Login" disabled={false} />
				<p className="text-center text-dark-spring-green">OR</p>
				<Button
					Element={{ icon: AiOutlineGoogle, size: 20 }}
					text="continue with google"
					type="secondary"
					disabled={false}
				/>
				<Button
					Element={{ icon: AiFillGithub, size: 20 }}
					text="continue with github"
					type="secondary"
					disabled={false}
				/>
				<p className="text-gunmetal max-md-phone:text-sm">
					Don&apos;t have an account?{' '}
					<Link
						className="text-dark-spring-green underline decoration-dark-spring-green"
						href={'https://github.com/lucas-wendell'}
					>
						Sign Up
					</Link>
				</p>
			</div>
		</form>
	);
};

export default Form;
