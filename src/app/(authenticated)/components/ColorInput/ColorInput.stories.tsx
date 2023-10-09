import { Meta, StoryObj } from '@storybook/react';
import ColorInput, { type Props } from './ColorInput';
import Providers from '../../Providers';
import { createReactComponent } from '../../utils/createReactComponent';

export default {
	component: ColorInput,
	title: 'AdminPages/Components/ColorInput',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	decorators: [Story => <Providers>{createReactComponent(Story)}</Providers>],
};
