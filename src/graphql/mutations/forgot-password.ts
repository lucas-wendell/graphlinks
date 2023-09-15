import { gql } from 'graphql-request';

export const GQL_MUTATION_FORGOT_PASSWORD = gql`
	mutation FORGOT_PASSWORD($email: String!) {
		forgotPassword(email: $email) {
			ok
		}
	}
`;
