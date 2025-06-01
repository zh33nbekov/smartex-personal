import { Accordeon } from '@/components/UI/Accordeon'
import { useState } from 'react'
import { PROHIBITED_GOODS } from '../../consts/prohibitedGoods'

const ProhibitedGoods = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0)

	const toggleAccordion = (index: number) => {
		setActiveIndex((prev) => (prev === index ? null : index))
	}
	return <Accordeon sections={PROHIBITED_GOODS} active={activeIndex} onToggle={toggleAccordion} />
}

export default ProhibitedGoods
