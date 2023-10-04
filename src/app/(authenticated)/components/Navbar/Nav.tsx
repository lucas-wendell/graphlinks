import Image from 'next/image';
import React, { type ReactNode } from 'react';
import logoSquare from '../../../../../public/assets/logo-square.svg';

type NavProps = { children: ReactNode; logo: boolean };

const Nav: React.FC<NavProps> = ({ children, logo = true }) => (
	<div className="flex items-center justify-center gap-3 max-[400px]:gap-2">
		{logo && (
			<Image
				src={logoSquare}
				className="max-[400px]:w-5 max-[400px]:h-5"
				width={30}
				height={30}
				alt="logo icon"
			/>
		)}
		<nav className="flex items-center justify-center">{children}</nav>
	</div>
);

export default Nav;
