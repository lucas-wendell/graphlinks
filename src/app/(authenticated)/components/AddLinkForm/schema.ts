import { z } from 'zod';

export const addLinkFormSchema = z.object({
	name: z.string().nonempty('Name is a required field'),
	url: z.string().nonempty('Url is a required field'),
});

export type AddLinkFormData = z.infer<typeof addLinkFormSchema>;
