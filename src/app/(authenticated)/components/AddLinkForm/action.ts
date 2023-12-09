'use server';

import { createLink } from '@/service/crud-links/create-link';
import { revalidatePath } from 'next/cache';

type Data = {
	title: string;
	link: string;
	svgIcon: string;
	userID: number;
	userToken: string;
};

export const createLinkAction = async ({
	title,
	link,
	svgIcon,
	userID,
	userToken,
}: Data) => {
	await createLink({
		title,
		link,
		svgIcon,
		userID,
		userToken,
	});
	revalidatePath('/admin');
};
