'use client';

import Link from 'next/link';
import React, { type ElementType } from 'react';

import { tv } from 'tailwind-variants';
import { useHover } from './hooks/useHover';

export type Props = {
	type: 'fill' | 'outline' | 'softShadow' | 'hardShadow';
	borderRadius: 'normal' | 'rounded' | 'fullRounded';
	bgColor: string;
	textColor: string;
	href: string;
	Icon?: ElementType;
	name: string;
};

const componentVariants = tv({
	base: 'flex relative p-4 w-full transition-color duration-300 border',
	variants: {
		borderRadius: {
			normal: 'rounded-none',
			rounded: 'rounded-md',
			fullRounded: 'rounded-full',
		},
		shadow: {
			softShadow: 'shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]',
			hardShadow: 'shadow-[5px_5px_0px_0px_rgba(0,0,0)]',
			outline: '',
			fill: '',
		},
	},
});

const UserLink: React.FC<Props> = ({
	borderRadius,
	bgColor,
	textColor,
	href,
	type,
	Icon,
	name,
}) => {
	const { onMouseOut, onMouseOver } = useHover({ type, bgColor, textColor });

	return (
		<Link
			href={href}
			style={{
				color: textColor,
				backgroundColor: type === 'outline' ? 'transparent' : bgColor,
				borderColor: bgColor,
			}}
			className={componentVariants({
				borderRadius,
				shadow: type,
				class: Icon ? '' : 'justify-center',
			})}
			onMouseOver={e => onMouseOver(e)}
			onMouseOut={e => onMouseOut(e)}
		>
			{Icon && <Icon />}
			<p className={Icon && 'absolute left-1/2 translate-x-[-50%]'}>{name}</p>
		</Link>
	);
};

export default UserLink;
