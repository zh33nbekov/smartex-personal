import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{ts,tsx,mdx}',
		'./src/components/**/*.{ts,jsx,tsx,mdx}',
		'./src/app/**/*.{ts,tsx,mdx}',
		'./src/layouts/**/*.{ts,tsx,mdx}',
		'./src/modules/**/*.{ts,tsx,mdx}',
		'./src/**/*.{ts,tsx,mdx}',
	],
	theme: {
		screens: {
			w1440: { max: '1440px' },
			w1350: { max: '1350px' },
			w1250: { max: '1250px' },
			w1150: { max: '1150px' },
			w1050: { max: '1050px' },
			w950: { max: '950px' },
			w850: { max: '850px' },
			w750: { max: '750px' },
			w650: { max: '650px' },
			w550: { max: '550px' },
			w450: { max: '450px' },
			w420: { max: '420px' },
			w370: { max: '370px' },
		},
		extend: {
			transitionProperty: {
				'opacity-visibility': 'opacity, visibility, transform',
			},
			colors: {
				background: 'var(--background)', // Светло-серый (фон)
				primary: 'var(--primary)', // Темно-синий (основной цвет)
				primary_text: 'var(--primary-text)', // Темно-серый (текст на основном фоне)
				secondary: 'var(--secondary)', // Оранжевый (второстепенный цвет)
				secondary_text: 'var(--secondary-text)', // Серый (текст на второстепенном фоне)
				border: 'var(--border)', // Серый (границы, разделители)
				icons: 'var(--icons)', // Серый (цвет иконок)
				success: 'var(--success)', // Зеленый (успешно)
				error: 'var(--error)', // Красный (ошибка)
				warning: 'var(--warning)', // Желтый-оранжевый (предупреждение)
				info: 'var(--info)', // Синий (информация)
				dark: 'var(--dark)', // Глубокий черный
				black: 'var(--black)', // #000000
				white: 'var(--white)', // #ffffff
				success_hover: 'var(--success-hover)', // hover color over 'success'
				background_hover: 'var(--background-hover)', // hover color over 'background'
				border_hover: 'var(--border-hover)', // hover color over 'border'
				primary_hover: 'var(--primary-hover)', // hover color over 'background'
				info_hover: 'var(--info-hover)', // hover color over 'info'
				white_hover: 'var(--white-hover)', // hover color over 'white'
				secondary_hover: 'var(--secondary-hover)', // hover color over 'secondary'
				error_hover: 'var(--error-hover)', // hover color over 'error'
			},
			fontFamily: {
				lato: 'var(--font-lato)',
				rubik: 'var(--font-rubik)',
				roboto: 'var(--font-roboto)',
				poppins: 'var(--font-poppins)',
			},
			animation: {
				rotating: 'rotating 1s linear infinite',
				spin: 'spin 3s cubic-bezier(0.25, 0.8, 0.25, 1) infinite',
			},
			keyframes: {
				rotating: {
					to: { transform: 'rotate(360deg)' },
				},
				spin: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'50%': {
						transform: 'rotate(360deg)',
					},
					'100%': {
						transform: 'rotate(-360deg)',
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config
