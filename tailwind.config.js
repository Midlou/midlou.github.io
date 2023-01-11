module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': {
						transform: 'rotate(-1deg)'
					},
					'50%': {
						transform: 'rotate(1deg)'
					},
				}
			},
			animation: {
				wiggle: 'wiggle 5s ease-in-out infinite',
			}
		},
	},
	plugins: [],
}
