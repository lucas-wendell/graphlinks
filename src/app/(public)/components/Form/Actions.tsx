import { type ReactNode } from 'react';

type ActionsProps = { children: ReactNode };

const Actions: React.FC<ActionsProps> = ({ children }) => (
	<div className="flex flex-col items-center justify-center gap-4 mt-8">
		{children}
	</div>
);

export default Actions;
