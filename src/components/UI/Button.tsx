import clsx from 'clsx'
import { Spinner } from './Spinner'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	isLoading?: boolean
	isDisabled?: boolean
	size?: 'sm' | 'md' | 'lg' | 'mdPlus'
	variant?: 'primary' | 'secondary' | 'success' | 'error' | 'white'
}

const variantMap = {
	error: 'bg-error hover:bg-error_hover text-white',
	primary: 'bg-primary hover:bg-primary_hover text-white',
	success: 'bg-success hover:bg-success_hover text-white',
	secondary: 'bg-secondary hover:bg-secondary_hover text-white',
	white: 'hover:bg-white_hover border-border',
} as const

const sizeMap = {
	mdPlus: 'p-5 rounded-2xl font-bold leading-[1.25rem]',
	md: 'py-[0.875rem] px-4 rounded-lg font-bold leading-[1.25rem]',
	lg: 'py-5 px-[0.625rem] rounded-2xl font-bold leading-[1.25rem]',
	sm: 'px-5 py-[0.625rem] rounded font-normal text-[0.813rem] leading-4',
} as const

const progressStyles = 'cursor-progress opacity-80'
const disabledStyles = 'cursor-not-allowed opacity-80'
const baseStyles = 'w-full border font-lato duration-300 transition'

export const Button = (props: ButtonProps) => {
	const { children, isLoading, isDisabled, className, ...restProps } = props
	const variant = variantMap[restProps.variant || 'primary']
	const size = sizeMap[restProps.size || 'md']

	return (
		<button
			{...restProps}
			disabled={isDisabled || isLoading}
			className={clsx(
				baseStyles,
				variant,
				size,
				className,
				{ isLoading: progressStyles },
				{ isDisabled: disabledStyles }
			)}
		>
			{isLoading ? <Spinner size={restProps.size} variant={restProps.variant} /> : children}
		</button>
	)
}
