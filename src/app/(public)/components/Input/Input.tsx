import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useBorder } from './hooks/useBorder';

export type Props = {
	type: 'text' | 'password';
	placeholder: string;
};

const icons = {
	password: faEyeSlash,
	text: faEye,
};

const Input: React.FC<Props> = ({ type, placeholder }) => {
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
			/>
			{type === 'password' && (
				<FontAwesomeIcon
					className="cursor-pointer text-jet"
					icon={icons[typeState]}
					data-action="icon"
					onClick={() => {
						setTypeState(prev => (prev === 'password' ? 'text' : 'password'));
					}}
				/>
			)}
		</div>
	);
};

export default Input;
