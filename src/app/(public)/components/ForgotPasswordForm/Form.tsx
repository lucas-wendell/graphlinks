'use client';

import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';

import { zodResolver } from '@hookform/resolvers/zod';

import { signIn } from 'next-auth/react';
import { type ForgotPasswordFormData, FormSchema } from './schema';

import { useForm } from 'react-hook-form';
import { useSendEmail } from './hooks/useSendEmail';

const ForgotPasswordForm: React.FC = () => {
	deleteCookie('recoveryEmail');

	const { sendEmail } = useSendEmail();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(FormSchema),
	});

	const sendRecoveryEmail = async ({ email }: ForgotPasswordFormData) =>
		sendEmail({ email });

	return (
		<form className="w-full" onSubmit={handleSubmit(sendRecoveryEmail)}>
			<div className="flex flex-col gap-4">
				<Input<ForgotPasswordFormData>
					type="email"
					placeholder="E-mail"
					register={register}
					name="email"
					error={errors.email?.message}
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-4 mt-8">
				<Button text="Send Recovery Email" disabled={false} />
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
			</div>
		</form>
	);
};

export default ForgotPasswordForm;
