import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {},
		},
		'@storybook/addon-mdx-gfm',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async config => {
		if (config.resolve) {
			config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
			config.resolve.alias = {
				...config.resolve.alias,
				'@': path.resolve(__dirname, '../src'),
			};
		}

		return config;
	},
};
export default config;
