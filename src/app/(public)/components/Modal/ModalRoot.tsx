import React, { ReactNode } from 'react';

export type ModalRootProps = {
	children: ReactNode;
};

const ModalRoot: React.FC<ModalRootProps> = ({ children }) => {
	return (
		<div className="flex items-center justify-center min-w-screen min-h-screen bg-black/10">
			{children}
		</div>
	);
};

export default ModalRoot;
