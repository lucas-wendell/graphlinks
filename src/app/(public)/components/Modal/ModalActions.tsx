import React, { ReactNode } from 'react';

type ModalActionsProps = {
	children: ReactNode;
};

const ModalActions: React.FC<ModalActionsProps> = ({ children }) => {
	return (
		<div className="flex gap-1 justify-center font-bold text-ghost-gray w-full">
			{children}
		</div>
	);
};

export default ModalActions;
