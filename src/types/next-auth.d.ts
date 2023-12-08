import NextAuth from 'next-auth';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		jwt: string;
		user: {
			id: number;
			blocked: boolean;
			confirmed: boolean;
			email: string;
			username: string;
		} & DefaultSession;
	}
}
