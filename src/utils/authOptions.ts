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
			authorize(credentials, req) {
				console.log('entrou aqui');

				if (credentials?.email && credentials.password) {
					console.log('entrou no if ');

					return {
						id: '1',
						email: 'lucas@server.com',
					};
				}
				return null;
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},
};
