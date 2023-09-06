import { z } from 'zod';

const envSchema = z.object({
	NEXTAUTH_SECRET: z.string().min(1),
	NEXTAUTH_URL: z.string().min(1),
	NEXT_PUBLIC_API_URL: z.string().min(1),
	NEXT_PUBLIC_DATABASE_URL: z.string().min(1),
	GOOGLE_CLIENT_ID: z.string().min(1),
	GOOGLE_CLIENT_SECRET: z.string().min(1),
	GITHUB_CLIENT_ID: z.string().min(1),
	GITHUB_CLIENT_SECRET: z.string().min(1),
});

export const env = envSchema.parse(process.env);
