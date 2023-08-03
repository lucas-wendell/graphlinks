import config from '../config/config';
import { Credentials, Response } from './login-types';

export const login = async ({
	email: identifier,
	password,
}: Credentials): Promise<Response> => {
	const res = await fetch(`${config.url}/api/auth/local/`, {
		method: 'POST',
		body: JSON.stringify({ identifier, password }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await res.json();

	return data;
};
