'use client';

import React from 'react';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

const ModalHeader: React.FC = () => {
	return (
		<div className="flex justify-end w-full text-lg text-dark-spring-green">
			<motion.button
				whileTap={{ scale: 0.9 }}
				type="button"
				title="Close Modal"
				aria-label="Close Modal"
			>
				<MdClose />
			</motion.button>
		</div>
	);
};

export default ModalHeader;
