import { z } from 'zod';

export const linkFormSchema = z.object({
	link: z.string().nonempty('You must provide a link'),
	name: z.string().nonempty('You must indentifier your link'),
});

export type LinkFormData = z.infer<typeof linkFormSchema>;
