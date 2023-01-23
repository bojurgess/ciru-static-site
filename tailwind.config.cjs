/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	fontFamily: {
		sans: ['Inter', 'sans-serif']
	},
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
