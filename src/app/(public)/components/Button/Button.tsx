import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export type Props = {
	text: string;
	type?: 'primary' | 'secondary';
	disabled?: boolean;
	icon: IconProp;
	onClick?: Function;
};

const Button: React.FC<Props> = ({
	text,
	type = 'primary',
	disabled = true,
	icon,
	onClick,
}) => {
	const styles = {
		primary: 'bg-electric-indigo text-ghost-gray hover:bg-dark-spring-green',
		secondary:
			'border border-french-gray text-jet hover:border-transparent hover:bg-french-gray/20',
	};
	const disabledStyle = 'bg-french-gray/40 text-jet/50';

	return (
		<div className="w-64">
			<button
				onClick={() => onClick?.()}
				disabled={disabled}
				className={`${
					disabled ? disabledStyle : styles[type]
				} duration-200 transition-colors ease-in w-full rounded-3xl p-3 font-semibold flex items-center justify-center gap-2`}
			>
				{icon && <FontAwesomeIcon icon={icon} />}
				<p>{text}</p>
			</button>
		</div>
	);
};

export default Button;
