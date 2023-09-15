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

/**
 *  This is a variable with all environment variables,
 *  to use it you must declare your environment variable in a
 * .env file at the root folder of project.
 * And add a schema at envSchema variable located in src/env.ts with the same name of your environment variable.
 * @summary A variable with all environment variables
 */
export const env: z.infer<typeof envSchema> = envSchema.parse(process.env);
