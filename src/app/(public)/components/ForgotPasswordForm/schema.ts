import { z } from 'zod';

export const FormSchema = z.object({
	email: z
		.string()
		.nonempty('E-mail is a required field')
		.email('E-mail format is not valid'),
});

export type ForgotPasswordFormData = z.infer<typeof FormSchema>;
