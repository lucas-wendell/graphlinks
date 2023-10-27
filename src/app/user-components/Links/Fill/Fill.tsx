import Link from 'next/link';
import React from 'react';

import { tv } from 'tailwind-variants';
import { tailwindVariants, type BaseProps } from '../utils';

export type Props = BaseProps;

const componentVariants = tv({
	...tailwindVariants,
});

const Fill: React.FC<Props> = ({ borderRadius, bgColor, textColor, href }) => {
	return (
		<Link
			href={href}
			style={{
				color: textColor,
				backgroundColor: bgColor,
				borderColor: bgColor,
			}}
			className={componentVariants({ borderRadius })}
			onMouseOver={e => {
				const target = e.target as HTMLLinkElement;
				target.style.backgroundColor = 'transparent';
				target.style.color = bgColor;
			}}
			onMouseOut={e => {
				const target = e.target as HTMLLinkElement;
				target.style.backgroundColor = bgColor;
				target.style.color = textColor;
			}}
		>
			oi
		</Link>
	);
};

export default Fill;
