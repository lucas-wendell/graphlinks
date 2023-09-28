import { Meta, StoryObj } from '@storybook/react';
import { createReactComponent } from '../../utils/createReactComponent';

import Providers from '../../Providers';
import AddLinkModal, { Props } from './AddLinkModal';

export default {
	component: AddLinkModal,
	title: 'AdminPages/Components/AddLinkModal',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	decorators: [Story => <Providers>{createReactComponent(Story)}</Providers>],
};
