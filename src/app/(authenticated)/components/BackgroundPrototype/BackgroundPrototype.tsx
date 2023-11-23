import type { ButtonHTMLProps } from '../../../../utils/shared-types/HTMLTypes';
import { tv } from 'tailwind-variants';
import React from 'react';

export type Props = {
	styleType: 'flat' | 'gradient';
	isActive: boolean;
} & ButtonHTMLProps;

const componentVariants = tv({
	base: 'rounded h-full w-full',
	variants: {
		styleType: {
			flat: 'bg-jet',
			gradient: 'bg-gradient-to-t from-jet to-french-gray',
		},
	},
});

const BackgroundPrototype: React.FC<Props> = ({ styleType, isActive }) => {
	return (
		<button
			className={`flex-1 rounded-md h-48 min-w-[130px] ${
				isActive ? 'border-2 p-2' : ''
			}`}
		>
			<div className={componentVariants({ styleType })} />
		</button>
	);
};

export default BackgroundPrototype;
