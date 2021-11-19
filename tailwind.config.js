/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgb(var(${variableName}))`
	}
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			screens: {
				'2xl-max': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }

				'xl-max': { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				'lg-max': { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				'md-max': { max: '767px' },
				// => @media (max-width: 767px) { ... }

				'sm-max': { max: '639px' },
				// => @media (max-width: 639px) { ... }
			},
			fontFamily: {
				primary: ['Inter', ...fontFamily.sans],
			},
			colors: {
				primary: {
					// Customize it on globals.css :root
					50: withOpacity('--tw-clr-primary-50'),
					100: withOpacity('--tw-clr-primary-100'),
					200: withOpacity('--tw-clr-primary-200'),
					300: withOpacity('--tw-clr-primary-300'),
					400: withOpacity('--tw-clr-primary-400'),
					500: withOpacity('--tw-clr-primary-500'),
					600: withOpacity('--tw-clr-primary-600'),
					700: withOpacity('--tw-clr-primary-700'),
					800: withOpacity('--tw-clr-primary-800'),
					900: withOpacity('--tw-clr-primary-900'),
				},
				discord: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5',
				},
				dark: '#222222',
			},
			keyframes: {
				flicker: {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
						opacity: 0.99,
						filter:
							'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
					},
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
						opacity: 0.4,
						filter: 'none',
					},
				},
			},
			animation: {
				flicker: 'flicker 3s linear infinite',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
