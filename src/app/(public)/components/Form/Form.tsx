'use client';

import React from 'react';
import Input from '../Input/Input';

import Link from 'next/link';
import Button from '../Button/Button';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';

import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import { type LoginUserFormData, loginFormSchema } from './schema';

import { useForm } from 'react-hook-form';
import { useLogin } from './hooks/useLogin';

const Form: React.FC = () => {
	const { login } = useLogin();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginUserFormData>({
		resolver: zodResolver(loginFormSchema),
	});

	const loginUser = async ({ email, password }: LoginUserFormData) =>
		login({ email, password });

	return (
		<form className="w-full" onSubmit={handleSubmit(loginUser)}>
			<div className="flex flex-col gap-4">
				<Input<LoginUserFormData>
					type="email"
					placeholder="E-mail"
					register={register}
					name="email"
					error={errors.email?.message}
				/>
				<Input<LoginUserFormData>
					type="password"
					placeholder="Password"
					register={register}
					name="password"
					error={errors.password?.message}
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
					onClick={() => {
						signIn('google', {
							redirect: false,
							callbackUrl: '/admin',
						});
					}}
				/>
				<Button
					type="button"
					icon={{ icon: AiFillGithub, className: 'text-[20px]' }}
					text="continue with github"
					styleType="secondary"
					disabled={false}
					onClick={() => {
						signIn('github', {
							redirect: false,
							callbackUrl: '/admin',
						});
					}}
				/>
				<p className="text-gunmetal max-md-phone:text-sm">
					Don&apos;t have an account?{' '}
					<Link
						className="text-dark-spring-green underline decoration-dark-spring-green"
						href={'/signup'}
					>
						Sign Up
					</Link>
				</p>
			</div>
		</form>
	);
};

export default Form;
