type CaretBottomProps = React.SVGProps<SVGSVGElement>

export const CaretBottom = ({ fill }: CaretBottomProps) => (
	<svg width='15' height='9' viewBox='0 0 15 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M7.73894 8.22687L14.4901 1.26494C14.9114 0.8305 14.656 0 14.1012 0L0.598815 0C0.0440023 0 -0.211373 0.8305 0.209877 1.26494L6.96106 8.22687C7.18481 8.45775 7.51519 8.45769 7.73894 8.22687Z'
			fill={fill || '#FFA000'}
		/>
	</svg>
)
