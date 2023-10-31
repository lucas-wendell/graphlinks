import React from 'react';
import { tv } from 'tailwind-variants';

export type Props = {
	isActive: boolean;
	borderRadius: 'normal' | 'rounded' | 'fullRounded';
	type: 'fill' | 'outline' | 'softShadow' | 'hardShadow';
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

const LinksPreview: React.FC<Props> = ({ isActive, borderRadius, type }) => {
	return (
		<button
			className={`w-full h-20 p-3 ${
				isActive ? 'border-2' : ''
			} border-french-gray rounded-md cursor-pointer`}
		>
			<div className={componentVariants({ borderRadius, shadow: type })}></div>
		</button>
	);
};

export default LinksPreview;
