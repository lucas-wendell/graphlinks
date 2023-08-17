import config from '../config/config';
import { Credentials, ProviderDependencies, Response } from './login-types';

export const login = async ({
	email: identifier,
	password,
}: Credentials): Promise<Response> => {
	const response = await fetch(`${config.url}/api/auth/local/`, {
		method: 'POST',
		body: JSON.stringify({ identifier, password }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();
	return data;
};

export const loginWithProvider = async ({
	provider,
	access_token,
}: ProviderDependencies): Promise<Response> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/auth/${provider}/callback?access_token=${access_token}`,
	);
	const data = await response.json();

	return data;
};
