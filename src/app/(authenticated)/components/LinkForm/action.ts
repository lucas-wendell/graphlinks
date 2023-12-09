'use server';

import { updateLink } from '@/service/crud-links/update-link';
import { revalidatePath } from 'next/cache';

export type Data = {
	linkID: string;
	userToken: string;
	title?: string;
	link?: string;
	svgIcon?: string;
	isActive?: boolean;
};

export const updateLinkAction = async ({
	title,
	link,
	svgIcon,
	linkID,
	isActive,
	userToken,
}: Data) => {
	updateLink({ title, link, linkID, userToken, svgIcon, isActive });

	revalidatePath('/admin');
};
