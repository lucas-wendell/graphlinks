import { gql } from 'graphql-request';
import { GQL_FRAGMENT_USER } from '../fragments/user';

/** 
 * Variable to create graphql query mutation with graphql-request
 * @summary Variable to create graphql query mutation with graphql-request 
 * @param {string} email - User email
 * @param {string} password - User password
 * @description This query mutation is a query to AUTHENTICATE USER. Must receive two arguments (email and password) and must be used like example bellow:
 * @example // Example:
 *   const data = await client.request<{ login: CredentialsResponse }>
 * (
		GQL_MUTATION_AUTHENTICATE_USER,
		{ email: 'email@example.com', password: 'example123' }
	);
 * */
export const GQL_MUTATION_AUTHENTICATE_USER = gql`
	${GQL_FRAGMENT_USER}

	mutation AUTHENTICATE_USER($email: String!, $password: String!) {
		login(input: { identifier: $email, password: $password }) {
			jwt
			user {
				...user
			}
		}
	}
`;
