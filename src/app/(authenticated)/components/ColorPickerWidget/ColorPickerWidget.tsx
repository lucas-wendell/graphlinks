'use client';

import React, { useState } from 'react';
import { Chrome } from '@uiw/react-color';

const ColorPickerWidget: React.FC = () => {
	const [hex, setHex] = useState('#04001E');
	return (
		<Chrome
			className="absolute left-[15%]  top-2/4"
			style={{ marginLeft: 20 }}
			color={hex}
			onChange={color => {
				setHex(color.hex);
			}}
		/>
	);
};

export default ColorPickerWidget;
