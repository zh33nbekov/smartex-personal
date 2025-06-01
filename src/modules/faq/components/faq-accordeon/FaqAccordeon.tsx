'use client'

import { Accordeon } from '@/components/UI/Accordeon'
import clsx from 'clsx'
import { useState } from 'react'
import { FAQ_SECTIONS } from '../../consts/faqSections'
import styles from './faq-accordeon.module.css'

export const FaqAccordeon: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0)

	const toggleAccordion = (index: number) => {
		setActiveIndex((prev) => (prev === index ? null : index))
	}

	return (
		<div className={styles['faq-accordeon']}>
			<h4 className={clsx(styles['faq-accordeon__title'], 'h4')}>Часто задаваемые вопросы</h4>
			<Accordeon sections={FAQ_SECTIONS} active={activeIndex} onToggle={toggleAccordion} />
		</div>
	)
}
