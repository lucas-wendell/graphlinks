import React from 'react';
import { X } from 'lucide-react';
import AddLinkForm from '../AddLinkForm/AddLinkForm';

export type Props = {};

const AddLinkModal: React.FC<Props> = ({}) => {
	return (
		<div className="w-full bg-ghost-gray rounded-md">
			<div className="flex items-center justify-between border-b border-french-gray p-3">
				<p className="text-jet font-bold uppercase">Create a new link</p>
				<button
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
		</div>
	);
};

export default AddLinkModal;
