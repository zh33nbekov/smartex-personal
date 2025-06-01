'use client'

import { Button } from '@/components/UI/Button'
import clsx from 'clsx'
import { useState } from 'react'
import { CaretBottom } from '../../../../../public/icons/common/CaretBottom'
import { DepositMethodModal } from '../deposit-method-modal/DepositMethodModal'
import styles from './change-deposit-method.module.css'

export const ChangeDepositMethod: React.FC = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const handleOpen = () => setModalOpen(true)
	const handleClose = () => setModalOpen(false)
	const [selectedMethod, setSelectedMethod] = useState('')
	const handleChange = (value: string) => {
		setSelectedMethod(value)
	}

	return (
		<>
			<DepositMethodModal
				open={modalOpen}
				onClose={handleClose}
				onChange={handleChange}
				selectedMethod={selectedMethod}
			/>
			<div className={styles['change-deposit-method']}>
				<h4 className={clsx('h4 mb-6')}>Пополнить счет</h4>
				<label htmlFor='replenishment' className='uiInputLabel mb-1'>
					Выберите способ пополнения
				</label>
				<Button
					variant='white'
					id='replenishment'
					onClick={handleOpen}
					className='text-secondary_text font-normal flex items-center justify-between bg-background text-nowrap w370:px-2'
				>
					Выберите способ пополнения
					<CaretBottom fill='#959595' />
				</Button>
				<Button
					size='lg'
					variant='white'
					onClick={() => {}}
					className='max-w-[255px] mt-6 text-secondary_text bg-background w950:py-4 w750:rounded-xl w450:max-w-full w370:py-2.5 w370:mt-4'
				>
					Сохранить изменения
				</Button>
			</div>
		</>
	)
}
