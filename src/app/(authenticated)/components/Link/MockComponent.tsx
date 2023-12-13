import React from 'react';

import { MoveVertical } from 'lucide-react';
import RemoveButton from '../RemoveButton/RemoveButton';

import ToggleButton from '../ToggleButton/ToggleButton';
import LinkForm from '../LinkForm/LinkForm';

/**
 * @description This mock was necessary because the function getServerSession() of next-auth library don't receive support from storybook.
 * @summary Please, do not use this component anywhere else in the application.
 * @deprecated
 */
export const MockLink: React.FC = () => {
	return (
		<div className="flex flex-col gap-4 w-full rounded-xl bg-ghost-gray text-jet p-5 max-sm:p-3">
			<div className="flex justify-between items-center">
				<button className="flex items-center gap-1 cursor-grabbing">
					<MoveVertical size={12} />
					<span className="font-medium">Link</span>
				</button>

				<div className="flex gap-1 items-center text-jet">
					<RemoveButton
						title="Remove Link"
						aria-label="Remove Link"
						id={'mock id'}
						userToken={'mock jwt'}
					/>
					<ToggleButton isActive={true} id={'mock id'} />
				</div>
			</div>

			<LinkForm
				defaultTitle={'Mock Title'}
				defaultLink={'http://mock-link.com'}
				id={'mock id'}
			/>
		</div>
	);
};

export default MockLink;
