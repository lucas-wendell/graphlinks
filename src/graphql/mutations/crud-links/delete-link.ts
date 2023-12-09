import { gql } from 'graphql-request';

export const GQL_MUTATION_DELETE_LINK = gql`
	mutation DELETE_LINK($linkID: ID!) {
		customDeleteLink(id: $linkID) {
			createdAt
		}
	}
`;
