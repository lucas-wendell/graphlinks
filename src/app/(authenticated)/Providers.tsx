'use client';

import React, { type ReactNode, useState } from 'react';
import { ModalContext, initialState } from './contexts/Modal';

type Props = { children: ReactNode };

const Providers: React.FC<Props> = ({ children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen);

	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</ModalContext.Provider>
	);
};

export default Providers;
