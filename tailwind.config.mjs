import animated from 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'xs': '360px'
			},
			colors: {
				primary: '#df54b7',
				secondary: '#7ad8a6',
				principal: '#FFFBFB',
				background: '#13020E'
			},
			keyframes: {
				pulsesecondary: {
					'0%': {
						color: '#7ad8a6',
						borderColor: '#7ad8a6',
						transform: 'scale(0.95)',
						boxShadow: '0 0 5px 0 #7ad8a6',
					},
					'70%': {
						color: '#7ad8a6',
						borderColor: '#7ad8a6',
						transform: 'scale(1.05)',
						boxShadow: '0 0 5px 10px transparent',
					},
					'100%': {
						color: '#7ad8a6',
						borderColor: '#7ad8a6',
						transform: 'scale(1)',
						boxShadow: '0 0 10px 0 transparent',
					},
				},
				pulseprimary: {
					'0%': {
						color: '#df54b7',
						borderColor: '#df54b7',
						transform: 'scale(0.95)',
						boxShadow: '0 0 5px 0 #df54b7',
					},
					'70%': {
						color: '#df54b7',
						borderColor: '#df54b7',
						transform: 'scale(1.05)',
						boxShadow: '0 0 5px 10px transparent',
					},
					'100%': {
						color: '#df54b7',
						borderColor: '#df54b7',
						transform: 'scale(1.05)',
						boxShadow: '0 0 10px 0 transparent',
					},
				},
				pulsechevron: {
					'0%': {
						opacity: '0.5',
						transform: 'scale(1)',
						transform: 'translateY(-5px)'
					},
					'10%': {
						transform: 'translateY(0px)'
					},
					'20%': {
						transform: 'translateY(-5px)'
					},
					'30%': {
						transform: 'translateY(0px)'
					},
					'40%': {
						transform: 'translateY(-5px)'
					},
					'50%': {
						transform: 'translateY(0px)'
					},
					'60%': {
						transform: 'translateY(-5px)'
					},
					'70%': {
						transform: 'translateY(0px)'
					},
					'80%': {
						opacity: '0.5',
						transform: 'scale(1)',
						transform: 'translateY(-5px)'
					},
					'90%': {
						opacity: '1',
						transform: 'scale(1.5)',
						transform: 'translateY(0px)'
					},
					'100%': {
						opacity: '0.5',
						transform: 'scale(1)',
						transform: 'translateY(-5px)'
					},
				}
			},
			animation: {
				pulseprimary: 'pulseprimary 1s ease-out forwards',
				pulsesecondary: 'pulsesecondary 1s ease-out forwards',
				pulsechevron: 'pulsechevron 10s ease-out infinite'
			},
		},
	},
	plugins: [animated, require('@tailwindcss/typography'),],
}
