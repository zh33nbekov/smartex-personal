'use client'

import { useState } from 'react'
import PickupPoint from '../../assets/pick-up-point.png'
import { WidgetBase } from '../widget-base/WidgetBase'
import { WidgetButton } from '../widget-button/WidgetButton'
import { PickupPointModal } from './PickupPointModal'

const PICK_UP_POINTS = [
	{ city: 'г.Бишкек', street: 'г.Бишкек ул.Шопокова 145' },
	{ city: 'г.Бишкек', street: 'г.Бишкек ул.Шопокова 146' },
	{ city: 'г.Бишкек', street: 'г.Бишкек ул.Шопокова 147' },
	{ city: 'г.Бишкек', street: 'г.Бишкек ул.Шопокова 148' },
	{ city: 'г.Бишкек', street: 'г.Бишкек ул.Шопокова 149' },
]

export const PickupPointWidget = () => {
	const [open, setOpen] = useState(false)
	const [selectedPickUpPoint, setSelectedPickUpPoint] = useState('')
	const showModal = () => setOpen(true)
	const hideModal = () => setOpen(false)
	const handleChangePickUpPoint = (value: string) => {
		setSelectedPickUpPoint(value)
	}

	return (
		<>
			<PickupPointModal
				open={open}
				onClose={hideModal}
				value={selectedPickUpPoint}
				pickUpPoints={PICK_UP_POINTS}
				onChange={handleChangePickUpPoint}
			/>

			<WidgetBase
				image={PickupPoint}
				alt='Ваш пункт выдачи'
				title='Ваш пункт выдачи'
				summary='Шопокова 145'
				action={<WidgetButton onClick={showModal}>Поменять</WidgetButton>}
			/>
		</>
	)
}
