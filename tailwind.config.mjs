/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Team Fortress web style
				'tf-background': '#A89F97',
				'tf-background-corners': '#2E2A28',
				'tf-backgroud-gray-bricks': '#595553',
				
				'tf-foreground': '#D2CDC9',
				'tf-text': '#34302C',
				'tf-button': '#8b7e71',
				'tf-button-shine': '#a19487',
				'tf-button-shadow': '#6f665d',
			},
		},
	},
	plugins: [],
}
