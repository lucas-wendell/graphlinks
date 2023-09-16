import { gql } from 'graphql-request';

/** 
 * Variable to create graphql query mutation with graphql-request
 * @summary Variable to create graphql query mutation with graphql-request 
 * @param {string} email - User email to recovery password
 * @description Query mutation to send recovery email to user. This query mutation receive one argument (email) and must be used like example bellow:
 * @example // Example:
 *  const { forgotPassword: { ok } } = await client.request<Response>(
		GQL_MUTATION_FORGOT_PASSWORD, 
		{email: 'email@example.com'}
	);
 * */
export const GQL_MUTATION_FORGOT_PASSWORD = gql`
	mutation FORGOT_PASSWORD($email: String!) {
		forgotPassword(email: $email) {
			ok
		}
	}
`;
