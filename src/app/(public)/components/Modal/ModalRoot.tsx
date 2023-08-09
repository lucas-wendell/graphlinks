import React, { ReactNode } from 'react';

export type ModalRootProps = {
	children: ReactNode;
};

const ModalRoot: React.FC<ModalRootProps> = ({ children }) => {
	return (
		<div className="flex items-center justify-center absolute w-full h-full top-0 bg-black/30">
			{children}
		</div>
	);
};

export default ModalRoot;
