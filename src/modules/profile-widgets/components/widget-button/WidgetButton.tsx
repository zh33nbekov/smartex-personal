import styles from './widget-button.module.css'

type WidgetButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const WidgetButton = ({ children, ...props }: WidgetButtonProps) => (
	<button className={styles['widget-button']} {...props}>
		{children}
	</button>
)
