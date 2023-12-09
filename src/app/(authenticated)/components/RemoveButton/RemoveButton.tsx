'use client';

import React from 'react';
import { ButtonHTMLProps } from '@/utils/shared-types/HTMLTypes';
import { deleteLinkAction } from './action';

export type Props = {
	id: string;
	userToken: string;
} & ButtonHTMLProps;

const RemoveButton: React.FC<Props> = ({ id, userToken }) => {
	return (
		<button
			className="rounded-sm px-2 hover:bg-jet/10 duration-300 transition-colors"
			onClick={() => {
				deleteLinkAction({ id, userToken });
			}}
		>
			remove
		</button>
	);
};

export default RemoveButton;
