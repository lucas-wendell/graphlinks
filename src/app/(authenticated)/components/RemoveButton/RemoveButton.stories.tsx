import { Meta, StoryObj } from '@storybook/react';
import RemoveButton, { Props } from './RemoveButton';

export default {
	component: RemoveButton,
	title: 'AdminPages/Components/RemoveButton',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
