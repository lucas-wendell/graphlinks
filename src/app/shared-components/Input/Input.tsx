'use client';

import { InputHTMLAttributes, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import {
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister,
} from 'react-hook-form';

type InputHTMLProps = InputHTMLAttributes<HTMLInputElement>;

export type Props<T extends FieldValues> = InputHTMLProps & {
	name: Path<T>;
	type: InputHTMLProps['type'];
	placeholder: string;
	register?: UseFormRegister<T>;
	registerOptions?:
		| RegisterOptions<T, (string | undefined) & Path<T>>
		| undefined;
	error?: string;
};

function Input<T extends FieldValues>({
	type,
	placeholder,
	register,
	name,
	error,
	registerOptions,
	...rest
}: Props<T>) {
	const [typeState, setTypeState] = useState<typeof type>(type);

	return (
		<div className="flex flex-col gap-2">
			<label
				className={`flex items-center w-full h-12 p-2 border-2 rounded-md ${
					error && 'border-crimson/60'
				} hover:${
					error ? 'border-crimson/60' : 'border-french-gray'
				} bg-french-gray/20`}
			>
				<input
					{...register?.(name, { ...registerOptions })}
					className="w-full outline-none text-jet placeholder-jet bg-transparent"
					type={typeState}
					placeholder={placeholder}
					{...rest}
				/>
				{type === 'password' && (
					<button
						type="button"
						className="text-jet"
						onClick={() => {
							setTypeState(prev => (prev === 'password' ? 'text' : 'password'));
						}}
					>
						{typeState === 'password' && <BsEyeSlash />}
						{typeState === 'text' && <BsEye />}
					</button>
				)}
			</label>
			{error && <span className="text-crimson mt-2">{error}</span>}
		</div>
	);
}

export default Input;
