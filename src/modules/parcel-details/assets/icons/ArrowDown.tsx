type ArrowDownProps = React.SVGProps<SVGSVGElement>

export const ArrowDown = ({ className }: ArrowDownProps) => (
	<svg
		className={className}
		width='20'
		height='20'
		viewBox='0 0 20 20'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10ZM9.47 14.03L6.47 11.03C6.32 10.88 6.25 10.69 6.25 10.5C6.25 10.31 6.32 10.12 6.47 9.97C6.76 9.68 7.24 9.68 7.53 9.97L9.25 11.69V6.5C9.25 6.09 9.59 5.75 10 5.75C10.41 5.75 10.75 6.09 10.75 6.5V11.69L12.47 9.97C12.76 9.68 13.24 9.68 13.53 9.97C13.82 10.26 13.82 10.74 13.53 11.03L10.53 14.03C10.24 14.32 9.76 14.32 9.47 14.03Z'
			fill='currentColor'
		/>
	</svg>
)
