import { Meta, StoryObj } from '@storybook/react';
import ColorForm, { type Props } from './ColorForm';

import Providers from '../../Providers';
import { createReactComponent } from '../../utils/createReactComponent';

export default {
	component: ColorForm,
	title: 'AdminPages/Components/ColorForm',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	decorators: [Story => <Providers>{createReactComponent(Story)}</Providers>],
};
