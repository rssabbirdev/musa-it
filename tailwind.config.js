/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				fadeOut: {
					'0%': {
						visibility: 'visible',
						opacity: 0,
						transition: 'opacity 2s linear',
					},
					'100%': { opacity: 1 },
				},
			},
			animation: {
				fadeOut: 'fadeOut 1s ease-in-out',
			},
		},
	},
	plugins: [],
};
