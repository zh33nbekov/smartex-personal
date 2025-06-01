import Link from 'next/link'
import styles from './widget-link.module.css'

type WidgetLinkProps = React.ComponentProps<typeof Link>

export const WidgetLink = ({ children, href, ...props }: WidgetLinkProps) => (
	<Link href={href} className={styles['widget-link']} {...props}>
		{children}
	</Link>
)
