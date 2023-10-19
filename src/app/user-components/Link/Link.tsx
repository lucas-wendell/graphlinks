import React, { type ElementType } from 'react';
import { tv } from 'tailwind-variants';
import Link from 'next/link';

export type Props = {
	type: 'fill' | 'outline' | 'softShadow' | 'hardShadow';
	style: 'normal' | 'rounded' | 'fullRounded';
	link: string;
	developMode?: boolean;
	Icon?: ElementType;
	name?: string;
	bgColor: string;
	textColor: string;
};

const linkVariants = tv({
	base: 'flex relative p-4 w-full transition-color duration-300',
	variants: {
		type: {
			fill: 'border',
			outline: 'border',
			softShadow: 'shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]',
			hardShadow: 'shadow-[5px_5px_0px_0px_rgba(0,0,0)]',
		},
		borderRadius: {
			normal: 'rounded-none',
			rounded: 'rounded-md',
			fullRounded: 'rounded-full',
		},
		developMode: {
			true: 'bg-black',
			false: 'bg-inherit',
		},
	},
});

const UserLink: React.FC<Props> = ({
	type,
	style,
	link,
	developMode,
	name,
	Icon,
	bgColor,
	textColor,
}) => {
	return (
		<>
			<Link
				href={link}
				className={linkVariants({
					borderRadius: style,
					type,
					developMode,
				})}
				style={{
					color: type === 'outline' ? bgColor : textColor,
					backgroundColor: type === 'outline' ? 'transparent' : bgColor,
					borderColor: bgColor,
				}}
				onMouseOver={e => {
					const target = e.target as HTMLLinkElement;
					target.style.backgroundColor =
						type === 'outline' ? bgColor : 'transparent';
					target.style.color = type === 'outline' ? textColor : bgColor;
				}}
				onMouseOut={e => {
					const target = e.target as HTMLLinkElement;
					target.style.backgroundColor =
						type === 'outline' ? 'transparent' : bgColor;
					target.style.color = type === 'outline' ? bgColor : textColor;
				}}
			>
				{Icon && <Icon />}
				<p className="absolute left-1/2 translate-x-[-50%]">{name}</p>
			</Link>
		</>
	);
};

export default UserLink;
