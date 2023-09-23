import React from 'react';

import { GripVertical } from 'lucide-react';
import { Trash2 } from 'lucide-react';

import LinkForm from '../LinkForm/LinkForm';
import ToggleButton from '../ToggleButton/ToggleButton';

export type Props = {};

const Link: React.FC = () => {
	return (
		<div className="w-full rounded-xl bg-ghost-gray p-5">
			<div className="w-full h-full flex justify-between items-center ">
				<div className="flex gap-2">
					<GripVertical className="self-center text-jet" />
					<LinkForm />
				</div>
				<div className="flex flex-col gap-3">
					<ToggleButton />
					<Trash2 size={22} className="self-end text-jet" />
				</div>
			</div>
		</div>
	);
};

export default Link;
