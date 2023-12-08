'use client';

import type { InputHTMLProps } from '../../../../utils/shared-types/HTMLTypes';
import React from 'react';

import type {
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister,
} from 'react-hook-form';

export type Props<T extends FieldValues> = InputHTMLProps & {
	name: Path<T>;
	register?: UseFormRegister<T>;
	error?: string;
	registerOptions?:
		| RegisterOptions<T, (string | undefined) & Path<T>>
		| undefined;
};

function LinkInput<T extends FieldValues>({
	name,
	register,
	error,
	registerOptions,
	...rest
}: Props<T>) {
	return (
		<div>
			<label className="w-full flex flex-col gap-1 text-jet" htmlFor={name}>
				<span className="capitalize">{name}</span>
				<input
					{...register?.(name, { ...registerOptions })}
					className="border border-french-gray outline-none rounded-md p-1 w-full focus:border-jet "
					type="text"
					id={name}
					{...rest}
				/>
			</label>
			{error && <span className="text-crimson normal-case">{error}</span>}
		</div>
	);
}

export default LinkInput;
