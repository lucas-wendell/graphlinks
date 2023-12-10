import React from 'react';
import { MoveVertical } from 'lucide-react';

import LinkForm from '../LinkForm/LinkForm';
import ToggleButton from '../ToggleButton/ToggleButton';
import RemoveButton from '../RemoveButton/RemoveButton';

import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

export type Props = {
	id: string;
	isActive: boolean;
	title: string;
	link: string;
	svgIcon: string;
};

const Link: React.FC<Props> = async ({
	id,
	isActive,
	title,
	link,
	svgIcon,
}) => {
	const session = await getServerSession(authOptions);
	if (!session) return;

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
						id={id}
						userToken={session.jwt}
					/>
					<ToggleButton isActive={isActive} id={id} />
				</div>
			</div>

			<LinkForm defaultTitle={title} defaultLink={link} id={id} />
		</div>
	);
};

export default Link;
