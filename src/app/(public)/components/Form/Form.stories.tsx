import { Meta } from '@storybook/react';
import { FormComposition } from '.';

import Button from '../Button/Button';
import Input from '../Input/Input';

export default {
	component: FormComposition.Form,
	title: 'PublicPages/Components/BaseForm',
	tags: ['autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta;

export const Base = () => (
	<FormComposition.Form>
		<FormComposition.Inputs>
			<Input<{ test: string }> type="text" placeholder="example" name="test" />
			<Input<{ password: string }>
				type="password"
				placeholder="Password example"
				name="password"
			/>
			<Input<{ test: string }>
				type="text"
				placeholder="example"
				name="test"
				error={'With Error'}
			/>
		</FormComposition.Inputs>
		<FormComposition.Form>
			<FormComposition.Actions>
				<Button text="Action Example 1"></Button>
				<Button text="Action Example 2" styleType="secondary"></Button>
				<Button text="Action Example 3" styleType="secondary"></Button>
			</FormComposition.Actions>
		</FormComposition.Form>
	</FormComposition.Form>
);

export const Inputs = () => (
	<FormComposition.Form>
		<FormComposition.Inputs>
			<Input<{ test: string }> type="text" placeholder="example" name="test" />
			<Input<{ password: string }>
				type="password"
				placeholder="Password example"
				name="password"
			/>
			<Input<{ test: string }>
				type="text"
				placeholder="example"
				name="test"
				error={'With Error'}
			/>
		</FormComposition.Inputs>
	</FormComposition.Form>
);

export const Actions = () => (
	<FormComposition.Form>
		<FormComposition.Actions>
			<Button text="Action Example 1"></Button>
			<Button text="Action Example 2" styleType="secondary"></Button>
			<Button text="Action Example 3" styleType="secondary"></Button>
		</FormComposition.Actions>
	</FormComposition.Form>
);
