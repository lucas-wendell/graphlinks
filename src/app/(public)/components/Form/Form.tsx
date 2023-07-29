'use client';

import React, { useEffect } from 'react';
import Input from '../Input/Input';

import Link from 'next/link';
import Button from '../Button/Button';

import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginFormSchema = z.object({
	email: z
		.string()
		.nonempty('E-mail is a required fild')
		.email('Email format is not valid'),
	password: z
		.string()
		.nonempty('Password is a required fild')
		.min(6, 'Password must be more than 6 characters'),
});

const Form: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
	});

	const loginUser = (data: any) => {
		console.log(data);
		console.log(errors);
		console.log('ola mundo');
	};

	useEffect(() => {
		console.log(errors);
	}, [errors]);

	return (
		<form className="w-full" onSubmit={handleSubmit(loginUser)}>
			<div className="flex flex-col gap-4">
				<Input
					type="email"
					placeholder="E-mail"
					register={register}
					name="email"
				/>
				<Input
					type="password"
					placeholder="Password"
					register={register}
					name="password"
				/>
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
					type="button"
					icon={{ icon: AiOutlineGoogle, className: 'text-[20px]' }}
					text="continue with google"
					styleType="secondary"
					disabled={false}
				/>
				<Button
					type="button"
					icon={{ icon: AiFillGithub, className: 'text-[20px]' }}
					text="continue with github"
					styleType="secondary"
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
