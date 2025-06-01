import { FaqAccordeon } from '../faq-accordeon/FaqAccordeon'
import { FaqForm } from '../faq-form/FaqForm'
import styles from './faq.module.css'

export const Faq: React.FC = () => (
	<div className={styles.faq}>
		<FaqAccordeon />
		<FaqForm />
	</div>
)
