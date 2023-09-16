'use client';

import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type RecoveryCodeFormData, FormSchema } from './schema';
import { useRecoveryEmail } from './hooks/useRecoveryEmail';

const RecoveryCodeForm: React.FC = () => {
	const { recoveryEmail } = useRecoveryEmail();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RecoveryCodeFormData>({
		resolver: zodResolver(FormSchema),
	});

	const sendRecoveryEmail = async ({
		code,
		password,
		passwordConfirmation,
	}: RecoveryCodeFormData) =>
		recoveryEmail({ code, password, passwordConfirmation });

	return (
		<form className="w-full" onSubmit={handleSubmit(sendRecoveryEmail)}>
			<div className="flex flex-col gap-4">
				<Input<RecoveryCodeFormData>
					type="text"
					placeholder="Recovery Code"
					register={register}
					name="code"
					error={errors.code?.message}
				/>
				<Input<RecoveryCodeFormData>
					type="password"
					placeholder="New Password"
					register={register}
					name="password"
					error={errors.password?.message}
				/>
				<Input<RecoveryCodeFormData>
					type="password"
					placeholder="Confirm Your New Password"
					register={register}
					name="passwordConfirmation"
					error={errors.passwordConfirmation?.message}
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-4 mt-8">
				<Button text="Change Password" disabled={false} />
			</div>
		</form>
	);
};

export default RecoveryCodeForm;
