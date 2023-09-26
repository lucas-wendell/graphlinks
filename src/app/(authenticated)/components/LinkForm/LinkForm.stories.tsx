import { Meta, StoryObj } from '@storybook/react';
import LinkForm, { Props } from './LinkForm';

export default {
	component: LinkForm,
	title: 'AdminPages/Components/LinkForm',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
