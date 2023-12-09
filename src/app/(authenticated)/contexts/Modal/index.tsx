import { type Dispatch, type SetStateAction, createContext } from 'react';

export type TypeOfValues = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const initialState = {
	isOpen: false,
	setIsOpen: () => {},
};

export const ModalContext = createContext<TypeOfValues>(initialState);
