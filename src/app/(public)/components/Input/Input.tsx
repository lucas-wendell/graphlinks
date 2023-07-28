'use client';

import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useBorder } from './hooks/useBorder';

type InputHTMLProps = InputHTMLAttributes<HTMLInputElement>;

export type Props = InputHTMLProps & {
	type: InputHTMLProps['type'];
	placeholder: string;
};

const Input: React.FC<Props> = ({ type, placeholder, ...rest }) => {
	const inputRef = useRef<null | HTMLInputElement>(null);
	const { borderState, setBorderState, borderStyle } = useBorder();

	const [typeState, setTypeState] = useState<typeof type>(type);
	const hoverStyle =
		borderState === 'outline' ? borderStyle : 'border-french-gray';

	const handleClickContainer = () => {
		if (borderState === 'outline') return;
		inputRef.current?.focus();
	};

	return (
		<div
			onClick={handleClickContainer}
			className={`flex items-center w-full h-12 p-2 border-2 rounded-md hover:${hoverStyle} ${borderStyle} bg-french-gray/20`}
		>
			<input
				ref={inputRef}
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
		</div>
	);
};

export default Input;
