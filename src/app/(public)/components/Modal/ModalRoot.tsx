'use client';

import React, { ReactNode } from 'react';

export type ModalRootProps = {
	children: ReactNode;
	onClick?: () => any;
};

const ModalRoot: React.FC<ModalRootProps> = ({ children, onClick }) => {
	return (
		<div
			className="flex items-center justify-center absolute w-full h-full top-0 bg-black/30"
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default ModalRoot;
