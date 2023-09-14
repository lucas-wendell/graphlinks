import { gql } from 'graphql-request';
import { GQL_FRAGMENT_USER } from '../fragments/user';

export const GQL_MUTATION_AUTHENTICATE_USER = gql`
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
