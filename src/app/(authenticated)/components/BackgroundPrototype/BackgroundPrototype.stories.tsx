import { Meta, StoryObj } from '@storybook/react';
import BackgroundPrototype,  {type Props } from './BackgroundPrototype';

export default {
	component: BackgroundPrototype,
	title: 'AdminPages/Components/BackgroundPrototype',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
