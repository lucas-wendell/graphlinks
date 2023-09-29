import { type Dispatch, type SetStateAction, createContext } from 'react';

export const initialState = {
	isOpen: true,
	setIsOpen: () => {},
};

export const ModalContext = createContext<{
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}>(initialState);
