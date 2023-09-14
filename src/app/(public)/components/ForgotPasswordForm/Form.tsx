'use client';

import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

import { AiOutlineGoogle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { forgotPassword } from '@/service/forgot-password';
import { setCookie } from 'cookies-next';

const FormSchema = z.object({
	email: z
		.string()
		.nonempty('E-mail is a required field')
		.email('E-mail format is not valid'),
});

type ForgotPasswordFormData = z.infer<typeof FormSchema>;

const ForgotPasswordForm: React.FC = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(FormSchema),
	});

	const sendRecoveryEmail = async ({ email }: ForgotPasswordFormData) => {
		const response = await forgotPassword(email);
		if (response.isOk) {
			setCookie('recoveryEmail', email, { secure: true });
			router.push('/forgot-password/recovery-code');
		}
	};

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
			</div>
		</form>
	);
};

export default ForgotPasswordForm;
