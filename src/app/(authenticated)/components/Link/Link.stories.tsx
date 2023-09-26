import { Meta, StoryObj } from '@storybook/react';
import Link, { Props } from './Link';

export default {
	component: Link,
	title: 'AdminPages/Components/Link',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
