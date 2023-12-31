import { Meta, StoryObj } from '@storybook/react';
import Navbar, { Props } from './Navbar';

export default {
	component: Navbar,
	title: 'AdminPages/Components/NavbarAdmin',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
