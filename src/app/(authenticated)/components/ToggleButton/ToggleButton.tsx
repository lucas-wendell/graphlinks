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
				isActive ? 'dark-spring-green' : 'french-gray'
			} rounded-full py-1 px-1 h-max w-14 transition-colors`}
		>
			<motion.span
				layout
				transition={spring}
				className="w-5 h-5 rounded-full bg-ghost-gray"
			></motion.span>
		</motion.button>
	);
};

export default ToggleButton;
