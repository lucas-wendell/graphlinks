import { login } from '@/service/login';
import { NextAuthOptions } from 'next-auth';
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
				if (credentials?.email && credentials.password) {
					const data = await login(credentials);
					if ('error' in data) return null;

					return {
						id: data.user.id.toString(),
						email: data.user.email,
						response: data,
					};
				}
				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			user && (token.user = user);
			return token;
		},
		async session({ session, token }) {
			session = token.user as any;
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
