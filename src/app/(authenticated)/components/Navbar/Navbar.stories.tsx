import { Meta } from '@storybook/react';
import Root, { type Props } from './Root';

import { NavBarComposition } from '.';
import { NavbarButtonCompositon } from '../NavbarButton';

import Image from 'next/image';
import Link from 'next/link';

import logoSquare from '../../../../../public/assets/logo-square.svg';

export default {
	component: Root,
	title: 'AdminPages/Components/NavbarComposition',
	tags: ['autodocs'],
} as Meta<Props>;

export const Primary = () => (
	<NavBarComposition.Root>
		<NavBarComposition.Nav logo={true}>
			<NavbarButtonCompositon.Root
				styleType="primary"
				goTo="https://github.com/lucas-wendell"
			>
				<NavbarButtonCompositon.Icon name="link" size={18} />
				<NavbarButtonCompositon.TextContent>
					links
				</NavbarButtonCompositon.TextContent>
			</NavbarButtonCompositon.Root>

			<NavbarButtonCompositon.Root
				styleType="secondary"
				goTo="https://github.com/lucas-wendell"
			>
				<NavbarButtonCompositon.Icon name="pencil-ruler" size={18} />
				<NavbarButtonCompositon.TextContent>
					appearance
				</NavbarButtonCompositon.TextContent>
			</NavbarButtonCompositon.Root>
		</NavBarComposition.Nav>
		<Link
			href="https://github.com/lucas-wendell"
			className="p-0.5 border-2 border-transparent duration-150 transition-colors ease-in hover:border-french-gray rounded-full"
		>
			<Image
				className="rounded-full"
				src={logoSquare}
				width={35}
				height={35}
				alt="user image"
			/>
		</Link>
	</NavBarComposition.Root>
);
