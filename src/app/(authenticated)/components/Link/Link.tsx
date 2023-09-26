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
					<div className="flex grow cursor-grabbing">
						<GripVertical className="self-center text-jet" />
					</div>
					<LinkForm />
				</div>
				<div className="flex flex-col gap-3">
					<ToggleButton />
					<button
						title="Delete Link"
						aria-label="Delete Link"
						className="bg-none p-1 pr-0 self-end text-jet"
					>
						<Trash2 size={22} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Link;
