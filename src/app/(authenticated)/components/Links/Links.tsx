import React from 'react';
import Link from '../Link/Link';
import { findLinks } from '@/service/crud-links/read-links';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

const Links: React.FC = async () => {
	const session = await getServerSession(authOptions);
	if (!session) return;
	const links = await findLinks({ userToken: session.jwt });

	return (
		<div className="flex flex-col gap-4 w-full">
			{links.findUserLinks.map(
				({ id, attributes: { isActive, title, link, svgIcon } }) => (
					<Link
						key={`${id}-link`}
						id={id}
						isActive={isActive}
						title={title}
						link={link}
						svgIcon={svgIcon}
					/>
				),
			)}
		</div>
	);
};

export default Links;
