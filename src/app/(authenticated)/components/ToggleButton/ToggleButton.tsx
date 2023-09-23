'use client';

import React, { useState } from 'react';
import { motion, spring } from 'framer-motion';
export type Props = {};

const ToggleButton: React.FC<Props> = ({}) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<motion.button
			onClick={() => setIsActive(prev => !prev)}
			className={`flex ${isActive ? 'justify-end' : 'justify-start'} bg-${
				isActive ? 'dark-spring-green' : 'white'
			} rounded-full p-1 h-max w-12 transition-colors`}
		>
			<motion.span
				layout
				transition={spring}
				className={`w-4 h-4 rounded-full bg-${
					isActive ? 'ghost-gray' : 'dark-spring-green'
				}`}
			></motion.span>
		</motion.button>
	);
};

export default ToggleButton;
