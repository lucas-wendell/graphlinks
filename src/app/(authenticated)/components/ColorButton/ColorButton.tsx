'use client';

import React, { useContext } from 'react';
import ColorPickerWidget from '../ColorPickerWidget/ColorPickerWidget';
import { ColorPicketWidgetContext } from '../../contexts/ColoPickerWidget';

export type Props = {};

const ColorButton: React.FC<Props> = ({}) => {
	const { widgetVisibility, setWidgetVisibility, color } = useContext(
		ColorPicketWidgetContext,
	);

	return (
		<>
			<button
				onClick={() => setWidgetVisibility(true)}
				className="z-10 border-2 border-jet w-14 h-14 rounded-lg relative"
			>
				<span
					className="left-0.5 top-0.5 bottom-0.5 right-0.5 rounded-md absolute"
					style={{ backgroundColor: color }}
				/>
				{widgetVisibility && <ColorPickerWidget />}
			</button>
			{widgetVisibility && (
				<div
					className="fixed top-0 bottom-0 left-0 right-0"
					onClick={() => setWidgetVisibility(false)}
				/>
			)}
		</>
	);
};

export default ColorButton;
