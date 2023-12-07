import { Meta, StoryObj } from '@storybook/react';
import LinksPrototype, { Props } from './LinksPrototype';

export default {
	component: LinksPrototype,
	title: 'AdminPages/Components/LinksPrototype',
	tags: ['autodocs'],
	parameters: {
		controls: { expanded: true },
	},
	argTypes: {
		borderRadius: {
			options: ['normal', 'rounded', 'fullRounded'],
			control: { type: 'radio' },
		},
		styleType: {
			options: ['fill', 'outline', 'softShadow', 'hardShadow'],
			control: { type: 'radio' },
		},
		isActive: {
			control: { type: 'boolean' },
		},
	},
	args: {
		borderRadius: 'normal',
		isActive: false,
		styleType: 'fill',
	},
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	render: args => (
		<div className="flex w-full">
			<LinksPrototype {...args} />
		</div>
	),
};
