import { Meta, StoryObj } from '@storybook/react';
import NavbarButton, { Props } from './NavBarButton';

export default {
	component: NavbarButton,
	title: 'AdminPages/Components/NavbarButton',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
