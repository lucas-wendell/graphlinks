'use client';

import React from 'react';
import { deleteLink } from '@/service/crud-links/delete-link';
import { ButtonHTMLProps } from '@/utils/shared-types/HTMLTypes';

export type Props = {
	id: string;
	userToken: string;
} & ButtonHTMLProps;

const RemoveButton: React.FC<Props> = ({ id, userToken }) => {
	return (
		<button
			className="rounded-sm px-2 hover:bg-jet/10 duration-300 transition-colors"
			onClick={() => {
				deleteLink({ linkID: id, userToken: userToken });
			}}
		>
			remove
		</button>
	);
};

export default RemoveButton;
