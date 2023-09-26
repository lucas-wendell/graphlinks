'use client';

import React from 'react';
import Input from '../Input/Input';

import Link from 'next/link';
import Button from '../../../shared-components/Button/Button';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';

import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import { type LoginUserFormData, loginFormSchema } from './schema';

import { useForm } from 'react-hook-form';
import { useLogin } from './hooks/useLogin';
import { FormComposition } from '../Form';

const LoginForm: React.FC = () => {
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
		<FormComposition.Form onSubmit={handleSubmit(loginUser)}>
			<FormComposition.Inputs>
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
			</FormComposition.Inputs>
			<FormComposition.Actions>
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
			</FormComposition.Actions>
		</FormComposition.Form>
	);
};

export default LoginForm;
