import { login, loginWithProvider } from '@/service/login';
import { NextAuthOptions } from 'next-auth';

import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email' },
				password: { label: 'Password' },
			},
			async authorize(credentials) {
				if (credentials?.email && credentials.password) {
					const data = await login(credentials);

					if ('error' in data) throw Error(data.error.message);

					return {
						id: data.user.id.toString(),
						email: data.user.email,
						response: data,
					};
				}
				return null;
			},
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async jwt({ token, user, account, ...rest }) {
			user && (token.user = user);

			const isSignIn = user ? true : false;
			if (isSignIn) {
				const data = await loginWithProvider({
					provider: account?.provider,
					access_token: account?.access_token,
				});

				if ('error' in data) throw Error(data.error.message);

				token.jwt = data.jwt;
				token.id = data.user.id;
			}
			return token;
		},
		async session({ session, token }) {
			session = { user: { ...(token.user as any) }, jwt: token.jwt } as any;

			return session;
		},
	},
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},
};
