import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z
		.string()
		.nonempty('E-mail is a required field')
		.email('E-mail format is not valid'),
	password: z
		.string()
		.nonempty('Password is a required field')
		.min(6, 'Password must be more than 6 characters'),
});

export type LoginUserFormData = z.infer<typeof loginFormSchema>;
