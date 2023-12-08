import React from 'react';
import { MoveVertical } from 'lucide-react';

import LinkForm from '../LinkForm/LinkForm';
import ToggleButton from '../ToggleButton/ToggleButton';

export type Props = {};

const Link: React.FC = () => {
	return (
		<div className="flex flex-col gap-4 w-full rounded-xl bg-ghost-gray text-jet p-5 max-sm:p-3">
			<div className="flex justify-between items-center">
				<button className="flex items-center gap-1 cursor-grabbing">
					<MoveVertical size={12} />
					<span className="font-medium">Link</span>
				</button>
				
				<div className="flex gap-1 items-center text-jet">
					<button
						title="Remove Link"
						aria-label="Remove Link"
						className="rounded-sm px-2 hover:bg-jet/10 duration-300 transition-colors"
					>
						remove
					</button>
					<ToggleButton />
				</div>
			</div>

			<LinkForm />
		</div>
	);
};

export default Link;
