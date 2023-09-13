import { client } from '@/graphql/client';
import { GQL_MUTATION_FORGOT_PASSWORD } from '@/graphql/mutations/forgot-password';
import { Response } from './types/forgotPassword-types';

export const forgotPassword = async (
	email: string,
): Promise<{ isOk: boolean }> => {
	const {
		forgotPassword: { ok },
	} = await client.request<Response>(GQL_MUTATION_FORGOT_PASSWORD, {
		email,
	});

	return { isOk: ok };
};
