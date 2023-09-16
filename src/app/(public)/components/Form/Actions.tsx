import { type ReactNode } from 'react';

type ActionsProps = { children: ReactNode; moreStyles?: string };

const Actions: React.FC<ActionsProps> = ({ children, moreStyles }) => (
	<div
		className={`flex flex-col items-center justify-center gap-4 mt-8 ${moreStyles}`}
	>
		{children}
	</div>
);

export default Actions;
