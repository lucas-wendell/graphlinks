import { client } from '../../graphql/client';
import { GQL_MUTATION_CREATE_LINK } from '../../graphql/mutations/crud-links/create-link';
import { Response } from '../types/create-link-types';

type Data = {
	title: string;
	link: string;
	userID: number;
	userToken: string;
	svgIcon?: string;
};

/**
 * This function create a new link
 * @summary Function to create a new link
 * @async
 * @function deleteLink
 * @param {string} title - Title of link (required)
 * @param {string} link - Link to add on link (required)
 * @param {string} svgIcon - Svg string to add on link (optional)
 * @param {string} userID - Param to indentify a user (required)
 * @param {string} userToken - User jwt (required)
 */
export const createLink = async ({
	title,
	link,
	svgIcon,
	userID,
	userToken,
}: Data) => {
	const response = await client.request<Response>(
		GQL_MUTATION_CREATE_LINK,
		{
			title,
			link,
			svgIcon,
			userID,
		},
		{
			authorization: `Bearer ${userToken}`,
		},
	);

	console.log(response);
};
