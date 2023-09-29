import { Meta, StoryObj } from '@storybook/react';
import AddLinkForm, { Props } from './AddLinkForm';

export default {
	component: AddLinkForm,
	title: 'AdminPages/Components/AddLinkForm',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
