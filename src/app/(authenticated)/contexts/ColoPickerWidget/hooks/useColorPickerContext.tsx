import { useState } from 'react';
import { type TypeOfValues, initialState } from '..';

export const useColorPickerContext = (): TypeOfValues => {
	const [widgetVisibility, setWidgetVisibility] = useState<boolean>(
		initialState.widgetVisibility,
	);
	const [color, setColor] = useState<string>(initialState.color);

	return {
		widgetVisibility,
		setWidgetVisibility,
		color,
		setColor,
	};
};
