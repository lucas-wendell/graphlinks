import React, { ButtonHTMLAttributes, ElementType } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	styleType?: 'primary' | 'secondary';
	icon?: { icon: ElementType; className?: string };
	onClick?: () => void;
};

const Button: React.FC<Props> = ({
	text,
	styleType = 'primary',
	icon: Icon = null,
	onClick,
	...rest
}) => {
	const styles = {
		primary: 'bg-electric-indigo text-ghost-gray hover:bg-dark-spring-green',
		secondary:
			'border border-french-gray text-jet hover:border-transparent hover:bg-french-gray/20',
	};
	const disabledStyle = 'bg-french-gray/40 text-jet/50';

	return (
		<button
			{...rest}
			onClick={onClick}
			className={`${
				rest.disabled ? disabledStyle : styles[styleType]
			} duration-200 transition-colors ease-in w-full rounded-3xl p-3 font-semibold flex items-center justify-center gap-2 capitalize`}
		>
			{Icon && <Icon.icon className={Icon && Icon.className} />}
			<p>{text}</p>
		</button>
	);
};

export default Button;
