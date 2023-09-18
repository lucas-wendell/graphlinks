import type { CredentialsResponse } from './types/login-types';
import type { ResetPasswordDependencies } from './types/reset-password-types';

import { client } from '../graphql/client';
import { GQL_MUTATION_RESET_PASSWORD } from '../graphql/mutations/reset-password';

/**
 * Function to reset user password
 * @async
 * @function resetPassword
 * @param {string} code - Recovery code send to user reset password
 * @param {string} password - New password entered by the user
 * @param {string} passwordConfirmation - Password confirmation (must be equal as password param)
 */
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
