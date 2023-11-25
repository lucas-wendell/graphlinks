import { Meta, StoryObj } from '@storybook/react';
import BackgroundPreview, { Props } from './BackgroundPreview';

export default {
	component: BackgroundPreview,
	title: 'AdminPages/Components/BackgroundPreview',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
