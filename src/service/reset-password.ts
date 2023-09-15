import type { CredentialsResponse } from './types/login-types';
import type { ResetPasswordDependencies } from './types/reset-password-types';

import { client } from '@/graphql/client';
import { GQL_MUTATION_RESET_PASSWORD } from '@/graphql/mutations/reset-password';

export const resetPassword = async ({
	code,
	password,
	passwordConfirmation,
}: ResetPasswordDependencies): Promise<CredentialsResponse> => {
	const data = await client.request<{ resetPassword: CredentialsResponse }>(
		GQL_MUTATION_RESET_PASSWORD,
		{ code, password, passwordConfirmation },
	);

	return 'resetPassword' in data ? { ...data.resetPassword } : data;
};
