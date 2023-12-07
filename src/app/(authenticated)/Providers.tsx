'use client';

import React, { type ReactNode } from 'react';
import { ModalContext } from './contexts/Modal';

import { ColorPicketWidgetContext } from './contexts/ColoPickerWidget';
import { useColorPickerContext } from './contexts/ColoPickerWidget/hooks/useColorPickerContext';
import { useModalContext } from './contexts/Modal/hooks/useModalContext';

type Props = { children: ReactNode };

const Providers: React.FC<Props> = ({ children }) => {
	const modalContextValues = useModalContext();
	const colorPickerContextValues = useColorPickerContext();

	return (
		<ModalContext.Provider value={{ ...modalContextValues }}>
			<ColorPicketWidgetContext.Provider
				value={{
					...colorPickerContextValues,
				}}
			>
				{children}
			</ColorPicketWidgetContext.Provider>
		</ModalContext.Provider>
	);
};

export default Providers;
