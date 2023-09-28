'use client';

import React, { useContext } from 'react';
import AddLinkForm from '../AddLinkForm/AddLinkForm';

import { X } from 'lucide-react';
import { motion } from 'framer-motion';

import { ModalContext } from '../../contexts/Modal';

export type Props = {};

const AddLinkModal: React.FC<Props> = () => {
	const { isOpen, setIsOpen } = useContext(ModalContext);

	return (
		<motion.div
			initial={{ y: -15, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.4 }}
			className={`${
				isOpen === false && 'hidden'
			} w-full bg-ghost-gray rounded-md`}
		>
			<div className="flex items-center justify-between border-b border-french-gray p-3">
				<p className="text-jet font-bold uppercase">Create a new link</p>
				<button
					onClick={() => setIsOpen(prev => !prev)}
					className="text-french-gray"
					title="Close Modal"
					aria-label="Close Modal"
				>
					<X />
				</button>
			</div>
			<div className="p-3">
				<AddLinkForm />
			</div>
		</motion.div>
	);
};

export default AddLinkModal;
