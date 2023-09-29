import React from 'react';
import Providers from '../../Providers';

import AddLink, { Props } from './AddLink';
import { Meta, StoryObj } from '@storybook/react';
import { createReactComponent } from '../../utils/createReactComponent';

export default {
	component: AddLink,
	title: 'AdminPages/Components/AddLink',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	decorators: [Story => <Providers>{createReactComponent(Story)}</Providers>],
};
