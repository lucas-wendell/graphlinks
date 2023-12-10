import { client } from '../../graphql/client';
import { GQL_MUTATION_DELETE_LINK } from '../../graphql/mutations/crud-links/delete-link';
import type { Data, Response } from '../types/delete-link-types';

/**
 * This function delete an link based on link ID and user token (jwt)
 * @summary Function to delete link
 * @async
 * @function deleteLink
 * @param {string} linkID - ID of link to be deleted (required)
 * @param {string} userToken - User jwt (required)
 */
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
