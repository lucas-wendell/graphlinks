'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export type ModalProps = {
	children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.3,
				ease: [0, 0.71, 0.2, 1.01],
				scale: {
					type: 'spring',
					damping: 5,
					stiffness: 100,
					restDelta: 0.001,
				},
			}}
			className="flex items-center justify-center flex-col gap-3 w-4/6 p-6 bg-ghost-gray"
		>
			{children}
		</motion.div>
	);
};

export default Modal;
