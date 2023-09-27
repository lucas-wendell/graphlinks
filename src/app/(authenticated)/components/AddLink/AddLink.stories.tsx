import { Meta, StoryObj } from '@storybook/react';
import AddLink, { Props } from './AddLink';

export default {
	component: AddLink,
	title: 'AdminPages/Components/AddLink',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
