import { client } from '../../graphql/client';
import { GQL_MUTATION_UPDATE_LINK } from '../../graphql/mutations/crud-links/update-link';
import { Response } from '../types/create-link-types';
import { Data } from '../types/update-link-types';

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

	console.log(response);
};

/* 
"svgIcon": "",
	"isActive": false,
	"title": ""
*/

/* 

{
  "userID": 2
}
*/
