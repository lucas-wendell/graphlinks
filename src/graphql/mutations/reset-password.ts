import { gql } from 'graphql-request';
import { GQL_FRAGMENT_USER } from '../fragments/user';

/** 
 * Variable to create graphql query mutation with graphql-request
 * @summary Variable to create graphql query mutation with graphql-request 
 * @param {string} code - Recovery code 
 * @param {string} password - New password 
 * @param {string} passwordConfirmation - Password confirmation 
 * @description Query mutation to reset user password. This query mutation receive three arguments (code, password and password Confirmation) and must be used like example below:
 * @example // Example:
 * const data = await client.request<{ resetPassword: CredentialsResponse }>(
		GQL_MUTATION_RESET_PASSWORD,
		{ code: 'recoverycode123', password: 'example123', passwordConfirmation: 'example123' },
	);
 * */
export const GQL_MUTATION_RESET_PASSWORD = gql`
	${GQL_FRAGMENT_USER}

	mutation RESET_PASSWORD(
		$password: String!
		$passwordConfirmation: String!
		$code: String!
	) {
		resetPassword(
			password: $password
			passwordConfirmation: $passwordConfirmation
			code: $code
		) {
			jwt
			user {
				...user
			}
		}
	}
`;
