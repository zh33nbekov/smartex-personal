import clsx from 'clsx'

type SpinnerProps = {
	size?: 'sm' | 'md' | 'lg' | 'mdPlus'
	variant?: 'primary' | 'secondary' | 'success' | 'error' | 'white'
}

const variantMap = {
	error: 'border-t-error_hover',
	primary: 'border-t-primary_hover',
	success: 'border-t-success_hover',
	secondary: 'border-t-secondary_hover',
	white: 'border-t-secondary_hover',
}

const sizeMap = {
	md: 'w-[20px] h-[20px] border-[2px]',
	mdPlus: 'w-[20px] h-[20px] border-[2px]',
	lg: 'w-[20px] h-[20px] border-[2.5px]',
	sm: 'w-[16px] h-[16px] border-[1.7px]',
}

const baseStyles = 'm-auto rounded-full animate-rotating'

export const Spinner = (props: SpinnerProps) => {
	const variant = variantMap[props.variant || 'primary']
	const size = sizeMap[props.size || 'md']

	return <div className={clsx(baseStyles, variant, size)} />
}
