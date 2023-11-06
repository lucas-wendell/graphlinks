import type { ButtonHTMLProps } from '../../../../utils/shared-types/HTMLTypes';
import React from 'react';
import { tv } from 'tailwind-variants';

export type Props = ButtonHTMLProps & {
	isActive: boolean;
	borderRadius: 'normal' | 'rounded' | 'fullRounded';
	styleType: 'fill' | 'outline' | 'softShadow' | 'hardShadow';
};

const componentVariants = tv({
	base: 'h-full w-full border border-black',
	variants: {
		borderRadius: {
			normal: 'rounded-none',
			rounded: 'rounded-md',
			fullRounded: 'rounded-full',
		},
		shadow: {
			softShadow: 'bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]',
			hardShadow: 'bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0)]',
			outline: 'bg-transparent',
			fill: 'bg-black',
		},
	},
});

const LinksPrototype: React.FC<Props> = ({
	isActive,
	borderRadius,
	styleType,
}) => {
	return (
		<button
			className={`flex-1 h-12 ${
				isActive ? 'border-2 p-2' : ''
			} border-french-gray rounded-md cursor-pointer min-w-[160px] `}
		>
			<div
				className={componentVariants({ borderRadius, shadow: styleType })}
			></div>
		</button>
	);
};

export default LinksPrototype;
