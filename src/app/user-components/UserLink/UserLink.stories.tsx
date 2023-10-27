import { Meta, StoryObj } from '@storybook/react';
import UserLink, { type Props } from './UserLink';
import { AlarmCheck } from 'lucide-react';

export default {
	component: UserLink,
	title: 'UserComponents/Components/Links/UserLink',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	args: {
		type: 'fill',
		name: 'Link name',
		borderRadius: 'fullRounded',
		href: 'https://github.com/lucas-wendell',
		bgColor: '#ff0000',
		textColor: '#000',
		Icon: AlarmCheck,
	},
};
