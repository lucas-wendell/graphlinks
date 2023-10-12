import { Meta, StoryObj } from '@storybook/react';
import ColorButton, { type Props } from './ColorButton';

import Providers from '../../Providers';
import { createReactComponent } from '../../utils/createReactComponent';

export default {
	component: ColorButton,
	title: 'AdminPages/Components/ColorButton',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	decorators: [Story => <Providers>{createReactComponent(Story)}</Providers>],
};
