'use client';

import React, { useState } from 'react';
import { motion, spring } from 'framer-motion';
export type Props = {};

const ToggleButton: React.FC<Props> = ({}) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<motion.button
			title="Toggle Link Status"
			aria-label="Toggle Link Status"
			onClick={() => setIsActive(prev => !prev)}
			className={`flex ${isActive ? 'justify-end' : 'justify-start'} ${
				isActive ? 'bg-dark-spring-green' : 'bg-jet'
			} rounded-full p-1 h-max w-12 transition-colors`}
		>
			<motion.span
				layout
				transition={spring}
				className="w-4 h-4 rounded-full bg-ghost-gray"
			></motion.span>
		</motion.button>
	);
};

export default ToggleButton;
