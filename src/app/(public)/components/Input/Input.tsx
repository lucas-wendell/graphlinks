'use client';

import { InputHTMLAttributes, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { useBorder } from './hooks/useBorder';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputHTMLProps = InputHTMLAttributes<HTMLInputElement>;

export type Props<T extends FieldValues> = InputHTMLProps & {
	name: Path<T>;
	type: InputHTMLProps['type'];
	placeholder: string;
	register: UseFormRegister<T>;
	error?: string;
};

function Input<T extends FieldValues>({
	type,
	placeholder,
	register,
	name,
	error,
	...rest
}: Props<T>) {
	const { setBorderState, borderStyle } = useBorder();
	const [typeState, setTypeState] = useState<typeof type>(type);
	const border = error ? 'border-crimson/60' : borderStyle;

	return (
		<div className="flex flex-col gap-2">
			<label
				className={`flex items-center w-full h-12 p-2 border-2 rounded-md ${border} bg-french-gray/20`}
			>
				<input
					{...register(name)}
					className="w-full outline-none text-jet placeholder-jet bg-transparent"
					type={typeState}
					placeholder={placeholder}
					onFocus={() => setBorderState(() => 'outline')}
					onBlur={() => setBorderState(() => 'normal')}
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
			<span className="text-crimson">{error && error}</span>
		</div>
	);
}

export default Input;
