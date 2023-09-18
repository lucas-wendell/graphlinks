import { Meta, StoryObj } from '@storybook/react';
import PageFormTemplate, {
	type PageFormTemplateProps,
} from './PageFormTemplate';

export default {
	component: PageFormTemplate,
	title: 'PublicPages/Components/PageFormTemplate',
	tags: ['autodocs'],
} as Meta<PageFormTemplateProps>;

type Story = StoryObj<PageFormTemplateProps>;

export const Primary: Story = {
	args: {
		children: null,
	},
};
