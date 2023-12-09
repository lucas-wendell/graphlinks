import { gql } from 'graphql-request';

export const GQL_MUTATION_UPDATE_LINK = gql`
	mutation UPDATE_LINK(
		$linkID: ID!
		$link: String
		$svgIcon: String
		$isActive: Boolean
		$title: String
	) {
		customUpdateLink(
			id: $linkID
			input: {
				isActive: $isActive
				link: $link
				svgIcon: $svgIcon
				title: $title
			}
		) {
			title
			link
			svgIcon
			isActive
			updatedAt
		}
	}
`;
