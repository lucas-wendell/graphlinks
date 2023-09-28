'use client';

import React, { useContext } from 'react';
import { Plus } from 'lucide-react';

import AddLinkModal from '../AddLinkModal/AddLinkModal';
import Button from '../../../shared-components/Button/Button';
import { ModalContext } from '../../contexts/Modal';

export type Props = {};

const AddLink: React.FC<Props> = ({}) => {
	const { isOpen, setIsOpen } = useContext(ModalContext);

	return (
		<div className="flex flex-col gap-5 w-full">
			<Button
				icon={{ icon: Plus }}
				text="Add Link"
				onClick={() => setIsOpen(prev => !prev)}
				disabled={isOpen}
			/>
			{isOpen && <AddLinkModal />}
		</div>
	);
};

export default AddLink;
