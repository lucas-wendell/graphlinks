import { client } from '../../graphql/client';
import { GQL_MUTATION_UPDATE_LINK } from '../../graphql/mutations/crud-links/update-link';
import { Response } from '../types/create-link-types';
import { Data } from '../types/update-link-types';

/**
 * This function update a link based on id and user token
 * @summary Function to update link
 * @async
 * @function updateLink
 * @param {string} title - Title of link (optional)
 * @param {string} link - Link to add on link (optional)
 * @param {string} svgIcon - Svg string to add on link (optional)
 * @param {string} linkID - ID of link to be updated (required)
 * @param {string} isActive - Param to set link status (optional)
 * @param {string} userToken - User jwt (required)
 */
export const updateLink = async ({
	title,
	link,
	svgIcon,
	linkID,
	isActive,
	userToken,
}: Data) => {
	const response = await client.request<Response>(
		GQL_MUTATION_UPDATE_LINK,
		{
			title,
			link,
			svgIcon,
			linkID,
			isActive,
		},
		{
			authorization: `Bearer ${userToken}`,
		},
	);

	return response;
};
