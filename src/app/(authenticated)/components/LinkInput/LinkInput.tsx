'use client';

import { Pencil } from 'lucide-react';
import React, { useRef } from 'react';

export type Props = {};

const LinkInput: React.FC<Props> = ({}) => {
	const inputRef = useRef<null | HTMLInputElement>(null);

	return (
		<form className="flex gap-2 max-w-min">
			<input
				ref={inputRef}
				className="outline-none border-2 pl-1 border-jet rounded-sm"
				type="text"
			/>
			<button
				onClick={() => {
					inputRef.current?.focus();
				}}
				className="flex justify-center items-center p-1 border-2 border-jet rounded-sm transition-colors hover:bg-jet hover:text-ghost-gray"
			>
				<Pencil size={16} />
			</button>
		</form>
	);
};

export default LinkInput;
