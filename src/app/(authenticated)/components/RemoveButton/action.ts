'use server';

import { deleteLink } from '@/service/crud-links/delete-link';
import { revalidatePath } from 'next/cache';

type Data = {
	id: string;
	userToken: string;
};

export const deleteLinkAction = async ({ id, userToken }: Data) => {
	await deleteLink({ linkID: id, userToken: userToken });
	revalidatePath('/admin');
};
