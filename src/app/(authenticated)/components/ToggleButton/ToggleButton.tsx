'use client';

import React, { useEffect, useState } from 'react';
import { motion, spring } from 'framer-motion';
import { updateLink } from '@/service/crud-links/update-link';
import { useSession } from 'next-auth/react';
export type Props = { isActive: boolean; id: string };

const ToggleButton: React.FC<Props> = ({ isActive: isActiveProp, id }) => {
	const [isActive, setIsActive] = useState(isActiveProp);
	const { data: session } = useSession();
	const jwt = session?.jwt;

	useEffect(() => {
		if (!jwt) return;
		updateLink({ isActive, userToken: jwt, linkID: id });
	}, [isActive, id, jwt]);

	return (
		<motion.button
			title="Toggle Link Status"
			aria-label="Toggle Link Status"
			onClick={() => setIsActive(prev => !prev)}
			className={`flex ${isActive ? 'justify-end' : 'justify-start'} ${
				isActive ? 'bg-dark-spring-green' : 'bg-jet'
			} rounded-full p-1 h-max w-11 transition-colors max-[400px]:w-10 max-[345px]:w-8`}
		>
			<motion.span
				layout
				transition={spring}
				className="w-3 h-3 rounded-full bg-ghost-gray max-[345px]:w-3 max-[345px]:h-3"
			></motion.span>
		</motion.button>
	);
};

export default ToggleButton;
