import { useState } from 'react';
import { type TypeOfValues, initialState } from '..';

export const useModalContext = (): TypeOfValues => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen);

	return {
		isOpen,
		setIsOpen,
	};
};
