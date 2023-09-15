import { env } from '@/env';
import type {
	Credentials,
	CredentialsResponse,
	ProviderDependencies,
	Response,
} from './types/login-types';

import { GQL_MUTATION_AUTHENTICATE_USER } from '@/graphql/mutations/auth';
import { client } from '@/graphql/client';

export const login = async ({
	email,
	password,
}: Credentials): Promise<CredentialsResponse> => {
	const data = await client.request<{ login: CredentialsResponse }>(
		GQL_MUTATION_AUTHENTICATE_USER,
		{
			email,
			password,
		},
	);

	return 'login' in data ? { ...data.login } : data;
};

export const loginWithProvider = async ({
	provider,
	access_token,
}: ProviderDependencies): Promise<{ login: Response }> => {
	const response = await fetch(
		`${env.NEXT_PUBLIC_API_URL}/api/auth/${provider}/callback?access_token=${access_token}`,
	);
	const data = await response.json();

	return { login: { ...data } };
};
