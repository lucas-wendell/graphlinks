'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { motion, MotionProps } from 'framer-motion';

export type ActionProps = ButtonHTMLAttributes<HTMLButtonElement> &
	MotionProps & {
		children: ReactNode;
		styleType: 'primary' | 'secondary';
		onClick: () => any;
	};

const button = tv({
	base: 'transition-colors duration-300 ease-linear py-2 px-4 rounded-sm',
	variants: {
		color: {
			primary: 'bg-dark-spring-green',
			secondary:
				'border border-crimson text-crimson hover:bg-crimson hover:text-ghost-gray',
		},
	},
});

const ModalAction: React.FC<ActionProps> = ({
	children,
	styleType,
	onClick,
	...props
}) => {
	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			className={button({ color: styleType })}
			onClick={onClick}
			{...props}
		>
			{children}
		</motion.button>
	);
};

export default ModalAction;
