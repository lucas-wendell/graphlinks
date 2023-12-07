import { Meta, StoryObj } from '@storybook/react';
import Providers from '../../Providers';
import { createReactComponent } from '../../utils/createReactComponent';
import ColorPickerWidget from './ColorPickerWidget';

export default {
	component: ColorPickerWidget,
	title: 'AdminPages/Components/ColorPickerWidget',
	tags: ['autodocs'],
} as Meta<{}>;

type Story = StoryObj<{}>;

export const Primary: Story = {
	decorators: [Story => <Providers>{createReactComponent(Story)}</Providers>],
};
