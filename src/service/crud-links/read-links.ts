import { client } from '../../graphql/client';
import { GQL_QUERY_GET_LINKS } from '../../graphql/queries/read-links';
import type { Data, Response } from '../types/read-links-types';

/**
 * This function send a query to server and return user links
 * @summary Function to get user links
 * @async
 * @function findLinks
 * @param {string} userToken - User jwt (required)
 */
export const findLinks = async ({ userToken }: Data) => {
	const response = await client.request<Response>(
		GQL_QUERY_GET_LINKS,
		{},
		{
			authorization: `Bearer ${userToken}`,
		},
	);

	return response;
};
