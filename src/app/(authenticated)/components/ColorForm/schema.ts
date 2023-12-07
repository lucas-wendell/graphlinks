import { z } from 'zod';

export const colorFormSchema = z.object({
	hexacode: z
		.string()
		.nonempty('Hexacode must be defined')
		.regex(
			new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
			'This input must provide an hexacode color',
		),
});

export type ColorFormData = z.infer<typeof colorFormSchema>;
