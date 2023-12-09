import { client } from '../../graphql/client';
import { GQL_QUERY_GET_LINKS } from '../../graphql/queries/read-links';
import type { Data, Response } from '../types/read-links-types';

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
