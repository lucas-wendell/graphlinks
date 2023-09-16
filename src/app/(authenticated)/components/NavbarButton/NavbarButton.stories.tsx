import { Meta, StoryObj } from '@storybook/react';
import NavbarButton, { Props } from './Button';
import { NavbarButtonCompositon } from '.';

export default {
	component: NavbarButton,
	title: 'AdminPages/Components/NavbarButton',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary = () => (
	<NavbarButtonCompositon.Root
		styleType="primary"
		goTo="https://github.com/lucas-wendell"
	>
		<NavbarButtonCompositon.Icon name="link" size={18} />
		<NavbarButtonCompositon.TextContent>
			links
		</NavbarButtonCompositon.TextContent>
	</NavbarButtonCompositon.Root>
);

export const Secondary = () => (
	<NavbarButtonCompositon.Root
		styleType="secondary"
		goTo="https://github.com/lucas-wendell"
	>
		<NavbarButtonCompositon.Icon name="pencil-ruler" size={18} />
		<NavbarButtonCompositon.TextContent>
			appearance
		</NavbarButtonCompositon.TextContent>
	</NavbarButtonCompositon.Root>
);
