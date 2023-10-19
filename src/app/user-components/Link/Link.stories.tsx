import { Meta, StoryObj } from '@storybook/react';
import UserLink, { type Props } from './Link';
import { AlarmCheck } from 'lucide-react';

export default {
	component: UserLink,
	title: 'UserComponents/Components/Links',
	tags: ['autodocs'],
	argTypes: {
		type: {
			options: ['fill', 'outline', 'softShadow', 'hardShadow'],
			control: { type: 'radio' },
		},
		style: {
			options: ['normal', 'rounded', 'fullRounded'],
			control: { type: 'radio' },
		},
	},
	args: {
		type: 'fill',
		name: 'Link name',
		style: 'fullRounded',
		link: 'https://github.com/lucas-wendell',
		bgColor: '#ff0000',
		textColor: '#000',
		Icon: AlarmCheck,
	},
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
