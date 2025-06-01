import clsx from 'clsx'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label?: string
	resize?: boolean
	errorMessage?: string
}

export const TextArea = ({ label, resize, errorMessage, className, ...props }: TextareaProps) => (
	<label htmlFor={label} className='w-full flex flex-col items-start justify-center gap-2'>
		{label && <span className='uiTextAreaLabel text-primary_text'>{label}</span>}
		<textarea
			id={label}
			{...props}
			className={clsx(
				'uiTextArea w-full py-4 px-5 bodyText rounded-[8px] outline-0 bg-background border duration-300 transition-[border-color]',
				{ 'resize-none': !!resize },
				errorMessage
					? 'text-error border-error placeholder:text-error hover:border-error_hover focus:border-error_hover'
					: 'text-primary_text border-border placeholder:text-secondary_text hover:border-border_hover focus:border-border_hover',
				className
			)}
		/>
		{errorMessage && (
			<span className='uiTextAreaLabel text-error h-[1.125rem]'>{errorMessage}</span>
		)}
	</label>
)
