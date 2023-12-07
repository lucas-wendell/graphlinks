import type { ButtonHTMLProps } from '../../../../utils/shared-types/HTMLTypes';
import { tv } from 'tailwind-variants';
import React from 'react';
import { transformCamelCase } from '../../../../utils/transformCamelCase';

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
		<div className="flex flex-col items-center gap-1 flex-1 h-56 min-w-[130px] ">
			<div
				className={`w-full h-full rounded-md ${isActive ? 'border-2 p-2' : ''}`}
			>
				<button className={componentVariants({ styleType })}></button>
			</div>
			<p className="text-jet capitalize">{transformCamelCase(styleType)}</p>
		</div>
	);
};

export default BackgroundPrototype;
