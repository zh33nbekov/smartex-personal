'use client'

import { Button } from '@/components/UI/Button'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ConfidantForm from '../confidant-form/ConfidantForm'

export const AddConfidant = () => {
	const [showForm, setShowForm] = useState(false)

	return (
		<div className='w-[528px] w650:w-full bg-white px-[20px] py-[40px] rounded-2xl'>
			<Button onClick={() => setShowForm(!showForm)} variant={showForm ? 'primary' : 'white'}>
				+ Добавить доверенное лицо
			</Button>
			<AnimatePresence>
				{showForm && (
					<div className='w-full mt-6'>
						<ConfidantForm />
					</div>
				)}
			</AnimatePresence>
		</div>
	)
}
