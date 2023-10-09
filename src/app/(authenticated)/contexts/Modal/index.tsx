import { type Dispatch, type SetStateAction, createContext } from 'react';

export type TypeOfValues = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const initialState = {
	isOpen: true,
	setIsOpen: () => {},
};

export const ModalContext = createContext<TypeOfValues>(initialState);
