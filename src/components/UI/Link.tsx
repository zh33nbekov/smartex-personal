import clsx from 'clsx'
import { default as NextLink } from 'next/link'

type ButtonProps = React.ComponentProps<typeof NextLink> & {
	size?: 'sm' | 'md' | 'lg' | 'mdPlus'
	variant?: 'primary' | 'secondary' | 'success' | 'error' | 'white'
}

const variantMap = {
	error: 'bg-error hover:bg-error_hover',
	primary: 'bg-primary hover:bg-primary_hover',
	success: 'bg-success hover:bg-success_hover',
	secondary: 'bg-secondary hover:bg-secondary_hover',
	white: 'bg-transparent hover:bg-white_hover border-border',
} as const

const sizeMap = {
	mdPlus: 'p-5 rounded-2xl font-bold leading-[1.25rem]',
	md: 'py-[0.875rem] px-4 rounded-lg font-bold leading-[1.25rem]',
	lg: 'py-5 px-[0.625rem] rounded-2xl font-bold leading-[1.25rem]',
	sm: 'px-5 py-[0.625rem] rounded font-normal text-[0.813rem] leading-4',
} as const

const progressStyles = 'cursor-progress opacity-80'
const disabledStyles = 'cursor-not-allowed opacity-80'
const baseStyles =
	'w-full border block flex justify-center items-center font-lato duration-300 transition'

export const Link = (props: ButtonProps) => {
	const { children, href, className, ...restProps } = props
	const variant = variantMap[restProps.variant || 'primary']
	const size = sizeMap[restProps.size || 'md']

	return (
		<NextLink
			href={href}
			{...restProps}
			className={clsx(
				baseStyles,
				variant,
				size,
				className,
				{ isLoading: progressStyles },
				{ isDisabled: disabledStyles }
			)}
		>
			{children}
		</NextLink>
	)
}
