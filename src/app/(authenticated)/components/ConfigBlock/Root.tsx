import React from 'react';

export type Props = { name: string; children: React.ReactNode };

const Root: React.FC<Props> = ({ name, children }) => {
	return (
		<div className="flex flex-col gap-2 w-full text-jet">
			<p className="uppercase font-semibold">{name}</p>
			<div className="flex flex-col gap-4 p-4 w-full rounded-lg bg-ghost-gray">
				{children}
			</div>
		</div>
	);
};

export default Root;
