import { Meta, StoryObj } from '@storybook/react';
import { ConfigBlockComposition } from '.';

import Root, { type Props } from './Root';
import ColorForm from '../ColorForm/ColorForm';

export default {
	component: Root,
	title: 'AdminPages/Components/ConfigBlock',
	tags: ['autodocs'],
} as Meta<Props>;

export const Primary = () => (
	<ConfigBlockComposition.Root name="button">
		<ConfigBlockComposition.Content>teste</ConfigBlockComposition.Content>
		<ConfigBlockComposition.ColorForms>
			<ColorForm name="button color" />
			<ColorForm name="button text color" />
		</ConfigBlockComposition.ColorForms>
	</ConfigBlockComposition.Root>
);
