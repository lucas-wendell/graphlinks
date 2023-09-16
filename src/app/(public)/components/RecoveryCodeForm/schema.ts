import { z } from 'zod';

export const FormSchema = z
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

export type RecoveryCodeFormData = z.infer<typeof FormSchema>;
