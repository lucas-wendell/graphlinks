/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'electric-indigo': '#633BFE',
				'french-gray': '#C8C6D7',
				jet: '#2D2E2E',
				gunmetal: '#2A2D34',
				'dark-spring-green': '#04724D',
				crimson: '#D80032',
				'ghost-gray': '#F0EFF4',
			},
			fontFamily: {
				jetBrains: 'var(--font-jetBrains)',
			},
		},
	},
	plugins: [],
};
