import { type ReactNode } from 'react';

export type Props = { children: ReactNode };

const Root: React.FC<Props> = ({ children }) => (
	<div className="flex items-center justify-between w-full py-4 px-5 rounded-full bg-ghost-gray">
		{children}
	</div>
);

export default Root;
