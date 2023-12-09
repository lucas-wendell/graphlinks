import { gql } from 'graphql-request';

export const GQL_QUERY_GET_LINKS = gql`
	query GET_LINKS {
		findUserLinks {
			id
			attributes {
				isActive
				title
				link
				svgIcon
				createdAt
				updatedAt
			}
		}
	}
`;
