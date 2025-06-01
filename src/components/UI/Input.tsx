import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	labelStyles?: string
	errorMessage?: string
	wrapperStyles?: string
}

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
	const { label, wrapperStyles, errorMessage, labelStyles, className, ...restProps } = props

	return (
		<label
			htmlFor={label}
			className={clsx('w-full flex flex-col items-start justify-center gap-1', wrapperStyles)}
		>
			{label && <span className={clsx('uiInputLabel', labelStyles)}>{label}</span>}
			<input
				ref={ref}
				id={label}
				{...restProps}
				className={clsx(
					'w-full py-4 px-5 bodyText rounded-lg outline-0 bg-background border duration-300 transition-[border-color]',
					className,
					errorMessage
						? 'text-error border-error placeholder:text-error hover:border-error_hover focus:border-error_hover'
						: 'text-primary_text border-border placeholder:text-secondary_text hover:border-border_hover focus:border-border_hover'
				)}
			/>
			{errorMessage && (
				<span className='uiInputLabel text-error h-[1.125rem] pointer-events-none'>
					{errorMessage}
				</span>
			)}
		</label>
	)
})

Input.displayName = 'Input'
