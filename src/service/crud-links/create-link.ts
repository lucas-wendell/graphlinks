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
