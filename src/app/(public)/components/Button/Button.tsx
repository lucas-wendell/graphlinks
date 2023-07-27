import React from 'react';
import { IconType } from 'react-icons';

export type Props = {
	text: string;
	type?: 'primary' | 'secondary';
	disabled?: boolean;
	Element?: { icon: IconType; size?: number };
	onClick?: Function;
};

const Button: React.FC<Props> = ({
	text,
	type = 'primary',
	disabled = true,
	Element = null,
	onClick,
}) => {
	const styles = {
		primary: 'bg-electric-indigo text-ghost-gray hover:bg-dark-spring-green',
		secondary:
			'border border-french-gray text-jet hover:border-transparent hover:bg-french-gray/20',
	};
	const disabledStyle = 'bg-french-gray/40 text-jet/50';

	return (
		<button
			onClick={() => onClick?.()}
			disabled={disabled}
			className={`${
				disabled ? disabledStyle : styles[type]
			} duration-200 transition-colors ease-in w-full rounded-3xl p-3 font-semibold flex items-center justify-center gap-2 capitalize`}
		>
			{Element && React.createElement(Element.icon, { fontSize: Element.size })}
			<p>{text}</p>
		</button>
	);
};

export default Button;
