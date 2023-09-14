'use client';

import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z
	.object({
		code: z
			.string()
			.nonempty('This is a required field, please enter your recovery code'),
		password: z
			.string()
			.nonempty('This is a required field, please enter your recovery code')
			.min(6, 'Password must be more than 6 characters'),
		passwordConfirmation: z
			.string()
			.nonempty('This is a required field, please enter your recovery code')
			.min(6, 'Password must be more than 6 characters'),
	})
	.refine(data => data.password === data.passwordConfirmation, {
		message: "Passwords don't match",
		path: ['passwordConfirmation'],
	});

type RecoveryCodeFormData = z.infer<typeof FormSchema>;

const RecoveryCodeForm: React.FC = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RecoveryCodeFormData>({
		resolver: zodResolver(FormSchema),
	});

	const sendRecoveryEmail = async (data: RecoveryCodeFormData) => {
		console.log('ola mundo!');
	};

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
