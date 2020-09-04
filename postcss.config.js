module.exports = {
  plugins: {
	'tailwindcss':{
		theme:{
			screens:{
				sm: '540px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			}
		}
	},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
}