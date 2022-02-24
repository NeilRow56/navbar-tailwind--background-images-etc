module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			mobile: '425px',
			tablet: '768px',
			laptop: '1024px',
			desktop: '1280px',
		},
		extend: {
			colors: {
				blue: {
					450: '#243c5a',
				},
				green: {
					450: '#83D483',
				},
			},
		},
	},
	plugins: [],
};
