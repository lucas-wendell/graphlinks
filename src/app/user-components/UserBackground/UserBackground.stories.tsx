import { Meta, StoryObj } from '@storybook/react';
import UserBackground, { type Props } from './UserBackground';

export default {
	component: UserBackground,
	title: 'UserComponents/Components/Background',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
