import { env } from '../env';
import { login, loginWithProvider } from '../service/login';

import type { UserData } from './auth-types';
import type { NextAuthOptions } from 'next-auth';

import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email' },
				password: { label: 'Password' },
			},
			async authorize(credentials) {
				if (credentials?.email && credentials?.password) {
					const data = await login({
						email: credentials.email,
						password: credentials.password,
					});

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
			clientId: env.GOOGLE_CLIENT_ID as string,
			clientSecret: env.GOOGLE_CLIENT_SECRET as string,
		}),
		Github({
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async jwt({ token, user, account }) {
			user && (token.user = user);
			const isSignIn = user ? true : false;

			if (isSignIn) {
				const userData = token.user as UserData;
				if (account?.provider === 'credentials') return userData.response;

				const data = await loginWithProvider({
					provider: account?.provider,
					access_token: account?.access_token,
				});

				if ('error' in data.login) throw Error(data.login.error.message);

				token.jwt = data.login.jwt;
				token.id = data.login.user.id;
				return token;
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
