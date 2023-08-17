'use client';

import React from 'react';
import Input from '../Input/Input';

import Link from 'next/link';
import Button from '../Button/Button';

import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const loginFormSchema = z.object({
	email: z
		.string()
		.nonempty('E-mail is a required field')
		.email('E-mail format is not valid'),
	password: z
		.string()
		.nonempty('Password is a required field')
		.min(6, 'Password must be more than 6 characters'),
});

type LoginUserFormData = z.infer<typeof loginFormSchema>;

const Form: React.FC = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginUserFormData>({
		resolver: zodResolver(loginFormSchema),
	});

	const loginUser = async (data: LoginUserFormData) => {
		const result = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
			callbackUrl: '/admin',
		});

		if (result?.error) {
			router.push(`login/?modal=true&title=${result.error}`);
			return;
		}
		router.replace('/admin');
	};

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
