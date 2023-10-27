import Link from 'next/link';
import React from 'react';

import { tv } from 'tailwind-variants';
import { tailwindVariants, type BaseProps } from '../utils';

export type Props = BaseProps;

const componentVariants = tv({
	...tailwindVariants,
});

const Outline: React.FC<Props> = ({
	borderRadius,
	bgColor,
	textColor,
	href,
}) => {
	return (
		<Link
			href={href}
			style={{
				borderColor: bgColor,
				color: textColor,
			}}
			className={componentVariants({ borderRadius })}
			onMouseOver={e => {
				const target = e.target as HTMLLinkElement;
				target.style.backgroundColor = bgColor;
			}}
			onMouseOut={e => {
				const target = e.target as HTMLLinkElement;
				target.style.backgroundColor = 'transparent';
			}}
		>
			oi
		</Link>
	);
};

export default Outline;
