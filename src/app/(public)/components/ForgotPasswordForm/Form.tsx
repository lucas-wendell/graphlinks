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

import { deleteCookie } from 'cookies-next';
import { FormComposition } from '../Form';

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
		<FormComposition.Form onSubmit={handleSubmit(sendRecoveryEmail)}>
			<FormComposition.Inputs>
				<Input<ForgotPasswordFormData>
					type="email"
					placeholder="E-mail"
					register={register}
					name="email"
					error={errors.email?.message}
				/>
			</FormComposition.Inputs>
			<FormComposition.Actions>
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
			</FormComposition.Actions>
		</FormComposition.Form>
	);
};

export default ForgotPasswordForm;
