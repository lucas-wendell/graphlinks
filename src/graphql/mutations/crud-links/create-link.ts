import { gql } from 'graphql-request';

export const GQL_MUTATION_CREATE_LINK = gql`
	mutation CREATE_LINK(
		$link: String!
		$userID: ID!
		$title: String!
		$isActive: Boolean
		$svgIcon: String
	) {
		createLink(
			data: {
				link: $link
				user: $userID
				title: $title
				isActive: $isActive
				svgIcon: $svgIcon
			}
		) {
			data {
				attributes {
					createdAt
					updatedAt
				}
			}
		}
	}
`;
