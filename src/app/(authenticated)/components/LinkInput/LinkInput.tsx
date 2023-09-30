'use client';

import { Pencil } from 'lucide-react';
import React, { type InputHTMLAttributes, useRef } from 'react';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type Props<T extends FieldValues> =
	InputHTMLAttributes<HTMLInputElement> & {
		name: Path<T>;
		link?: string;
		register?: UseFormRegister<T>;
		error?: string;
	};

function LinkInput<T extends FieldValues>({
	name,
	link,
	register,
	error,
	...rest
}: Props<T>) {
	const inputRef = useRef<null | HTMLInputElement>(null);

	return (
		<div>
			<div className="flex gap-2 max-w-min">
				<input
					{...register?.(name)}
					ref={inputRef}
					className={`outline-none border-2 pl-1 border-${
						error ? 'crimson' : 'jet'
					}  rounded-sm bg-transparent max-sm:w-52 max-[400px]:w-40 max-[345px]:w-32`}
					type="text"
					{...rest}
				/>
				<button
					title="Edit Input Value"
					aria-label="Edit Input Value"
					onClick={() => {
						inputRef.current?.focus();
					}}
					type="button"
					className="flex justify-center items-center p-1 border-2 border-jet rounded-sm transition-colors hover:bg-jet hover:text-ghost-gray text-base max-[345px]:text-xs max-[345px]:p-0.5"
				>
					<Pencil size={16} />
				</button>
			</div>
			{error && <span className="text-crimson normal-case">{error}</span>}
		</div>
	);
}

export default LinkInput;
