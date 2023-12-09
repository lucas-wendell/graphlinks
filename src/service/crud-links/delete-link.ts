import { client } from '../../graphql/client';
import { GQL_MUTATION_DELETE_LINK } from '../../graphql/mutations/crud-links/delete-link';
import type { Data, Response } from '../types/delete-link-types';

export const deleteLink = async ({ linkID, userToken }: Data) => {
	const response = await client.request<Response>(
		GQL_MUTATION_DELETE_LINK,
		{
			linkID,
		},
		{
			authorization: `Bearer ${userToken}`,
		},
	);

	console.log(response);
};
