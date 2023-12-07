import { type Dispatch, type SetStateAction, createContext } from 'react';

export type TypeOfValues = {
	widgetVisibility: boolean;
	setWidgetVisibility: Dispatch<SetStateAction<boolean>>;
	color: string;
	setColor: Dispatch<SetStateAction<string>>;
};

export const initialState = {
	widgetVisibility: false,
	setWidgetVisibility: () => {},
	color: '#fff',
	setColor: () => {},
};

export const ColorPicketWidgetContext =
	createContext<TypeOfValues>(initialState);
