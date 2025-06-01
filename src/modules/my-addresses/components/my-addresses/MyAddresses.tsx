'use client'

import { InfoModal } from '@/components/info-modal/InfoModal'
import { Button } from '@/components/UI/Button'
import { Checkbox } from '@/components/UI/Checkbox'
import Link from 'next/link'
import { useState } from 'react'
import { Home } from '../../assets/Home'
import { Office } from '../../assets/Office'
import { Address } from '../address/Address'

export const MyAddresses: React.FC = () => {
	const [isConfirm, setIsConfirm] = useState(false)
	const [isDone, setIsDone] = useState(false)
	const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target
		setIsConfirm(checked)
	}
	const handleInfoModalOpen = () => setIsDone(true)
	const handleInfoModalClose = () => setIsDone(false)

	return (
		<>
			<InfoModal
				open={isDone}
				title='Спасибо за ваш заказ!'
				onClose={handleInfoModalClose}
				description='Ваша посылка успешно оформлена, мы уведомим вас об отслеживании'
			/>
			<div className='bg-white py-10 px-5 rounded-2xl w750:py-8 w750:px-4 w550:py-6'>
				<h4 className='h4'>Мои адреса</h4>
				<div>
					<div className='flex flex-col gap-4 my-4'>
						<Address icon={Home} type='Дом' street='г.Бишкек ул.Киевская 123' />
						<Address icon={Office} type='Офис' street='г.Бишкек ул.Советская  123' />
					</div>
					<div className='flex items-center flex-wrap'>
						<div className='flex items-center'>
							<Checkbox checked={isConfirm} onChange={handleConfirmChange} name='confirm' />
							<span className='ml-4 mr-[5px] w450:leading-none'>
								Я соглашаюсь с условиями доставки
							</span>
						</div>
						<Link
							href={''}
							className='bodyText text-info hover:text-info_hover transition border-b border-info ml-auto'
						>
							Подробнее
						</Link>
					</div>
				</div>
				<Button
					onClick={handleInfoModalOpen}
					size='lg'
					className='mt-6 w550:rounded-xl w550:py-4'
				>
					Оформить доставку
				</Button>
			</div>
		</>
	)
}
