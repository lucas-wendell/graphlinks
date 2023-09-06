import { useState } from 'react';

export const useBorder = () => {
	const borderColors = {
		outline: 'border-jet',
		normal: 'hover:border-french-gray',
	};
	const [borderState, setBorderState] =
		useState<keyof typeof borderColors>('normal');

	return {
		borderState,
		setBorderState,
		borderStyle: borderColors[borderState],
	};
};
