'use client';

import React, { useContext } from 'react';
import { Chrome } from '@uiw/react-color';
import { ColorPicketWidgetContext } from '../../contexts/ColoPickerWidget';

const ColorPickerWidget: React.FC = () => {
	const { color, setColor } = useContext(ColorPicketWidgetContext);

	return (
		<Chrome
			className="absolute left-[15%] top-2/4"
			style={{ marginLeft: 20 }}
			color={color}
			onChange={color => setColor(color.hex)}
		/>
	);
};

export default ColorPickerWidget;
