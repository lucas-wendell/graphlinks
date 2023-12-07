import { Meta, StoryObj } from '@storybook/react';
import LinksPreview, { Props } from './LinksPreview';

export default {
	component: LinksPreview,
	title: 'AdminPages/Components/LinksPreview',
	tags: ['autodocs'],
	argTypes: {
		type: {
			options: ['fill', 'outline', 'softShadow', 'hardShadow'],
			control: { type: 'radio' },
		},
	},
	args: {
		type: 'fill',
	},
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
