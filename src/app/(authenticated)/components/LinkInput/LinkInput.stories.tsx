import type { Meta, StoryObj } from '@storybook/react';
import LinkInput, { type Props } from './LinkInput';
import type { Mock } from './mock';

export default {
	component: LinkInput,
	title: 'AdminPages/Components/LinkInput',
	tags: ['autodocs'],
} as Meta<Props<{}>>;

type Story = StoryObj<Props<{}>>;

export const Primary: Story = {
	render: () => <LinkInput<Mock> name="test" />,
};

export const WithError: Story = {
	render: () => <LinkInput<Mock> name="test" error="test error" />,
};
