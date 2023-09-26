'use client';

import React from 'react';

import Input from '../Input/Input';
import Button from '../../../shared-components/Button/Button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type RecoveryCodeFormData, FormSchema } from './schema';
import { useRecoveryEmail } from './hooks/useRecoveryEmail';

import { FormComposition } from '../Form';

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
		<FormComposition.Form onSubmit={handleSubmit(sendRecoveryEmail)}>
			<FormComposition.Inputs>
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
			</FormComposition.Inputs>
			<FormComposition.Actions moreStyles="mt-8">
				<Button text="Change Password" disabled={false} />
			</FormComposition.Actions>
		</FormComposition.Form>
	);
};

export default RecoveryCodeForm;
