import React from 'react';
import ColorPickerWidget from '../ColorPickerWidget/ColorPickerWidget';

export type Props = {};

const ColorInput: React.FC<Props> = ({}) => {
	return (
		<button className="border-2 border-jet w-14 h-14 rounded-lg relative">
			<span className="left-0.5 top-0.5 bottom-0.5 right-0.5 rounded-md bg-red-700 absolute" />
			<ColorPickerWidget />
		</button>
	);
};

export default ColorInput;
