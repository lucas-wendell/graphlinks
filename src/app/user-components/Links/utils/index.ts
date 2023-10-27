import type { ElementType } from 'react';

export type BaseProps = {
	borderRadius: 'normal' | 'rounded' | 'fullRounded';
	bgColor: string;
	textColor: string;
	href: string;
	Icon?: ElementType;
};

export const borderRadiusOptions = {
	normal: 'rounded-none',
	rounded: 'rounded-md',
	fullRounded: 'rounded-full',
};

export const tailwindVariants = {
	base: 'flex relative p-4 w-full transition-color duration-300 border',
	variants: {
		borderRadius: borderRadiusOptions,
	},
};
