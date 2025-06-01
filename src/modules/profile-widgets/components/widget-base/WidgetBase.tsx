import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import styles from './widget-base.module.css'

interface WidgetBaseProps {
	image: StaticImageData
	alt: string
	title: string
	summary: string
	action: ReactNode
}

export const WidgetBase: React.FC<WidgetBaseProps> = ({ image, alt, title, summary, action }) => (
	<div className={styles.widget}>
		<Image width={50} height={50} src={image} alt={alt} className={styles.widget__image} />
		<div className={styles.widget__content}>
			<h6 className={`h6 ${styles.widget__title}`}>{title}</h6>
			<p className={styles.widget__summary}>{summary}</p>
			{action}
		</div>
	</div>
)
