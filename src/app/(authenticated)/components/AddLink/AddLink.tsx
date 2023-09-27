import Button from '../../../shared-components/Button/Button';
import React from 'react';
import { Plus } from 'lucide-react';

export type Props = {};

const AddLink: React.FC<Props> = ({}) => {
	return (
		<div className="w-full">
			<Button icon={{ icon: Plus }} text="Add Link" />
		</div>
	);
};

export default AddLink;
