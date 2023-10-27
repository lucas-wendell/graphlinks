import { Meta, StoryObj } from '@storybook/react';
import UserLink, { type Props } from './UserLink';
import { AlarmCheck } from 'lucide-react';

export default {
	component: UserLink,
	title: 'UserComponents/Components/Links',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Fill: Story = {
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

export const Outline: Story = {
	args: {
		type: 'outline',
		name: 'Link name',
		borderRadius: 'fullRounded',
		href: 'https://github.com/lucas-wendell',
		bgColor: '#ff0000',
		textColor: '#000',
		Icon: AlarmCheck,
	},
};

export const SoftShadow: Story = {
	args: {
		type: 'softShadow',
		name: 'Link name',
		borderRadius: 'fullRounded',
		href: 'https://github.com/lucas-wendell',
		bgColor: '#ff0000',
		textColor: '#000',
		Icon: AlarmCheck,
	},
};

export const HardShadow: Story = {
	args: {
		type: 'hardShadow',
		name: 'Link name',
		borderRadius: 'fullRounded',
		href: 'https://github.com/lucas-wendell',
		bgColor: '#ff0000',
		textColor: '#000',
		Icon: AlarmCheck,
	},
};

export const WithoutIcon: Story = {
	args: {
		type: 'fill',
		name: 'Link name',
		borderRadius: 'fullRounded',
		href: 'https://github.com/lucas-wendell',
		bgColor: '#ff0000',
		textColor: '#000',
	},
};
