'use client'

import { Button } from '@/components/UI/Button'
import { Checkmark } from '@/components/UI/Checkmark'
import { Modal } from '@/components/UI/Modal'
import clsx from 'clsx'

type PickupPointModalProps = {
	open: boolean
	value: string
	onClose: () => void
	pickUpPoints: { city: string; street: string }[]
	onChange: (value: string) => void
}

export const PickupPointModal = (props: PickupPointModalProps) => {
	const { open, value, onClose, onChange, pickUpPoints } = props

	return (
		<Modal open={open} onClose={onClose}>
			<div className='w-[528px] w650:w-[400px] py-[40px] px-[20px] bg-white rounded-2xl w420:w-screen w420:py-[1.25rem]'>
				<h4 className='h4 mb-6 w650:text-[20px]'>Поменять пункт выдачи заказов</h4>
				<div className='max-h-[374px] h-full overflow-x-auto pr-4 styled-scroll w420:pr-2'>
					{pickUpPoints.map((elem) => {
						const isActive = elem.street === value
						return (
							<div
								key={elem.street}
								className={clsx(
									'flex items-center gap-4 mb-4 rounded-2xl py-2 px-5 border border-border cursor-pointer w420:rounded-[.625rem]',
									isActive ? 'bg-background_hover' : 'bg-background'
								)}
								onClick={onChange.bind(null, elem.street)}
							>
								<Checkmark
									active={isActive}
									className='w-6 h-6 border rounded-full flex items-center justify-center flex-shrink-0'
								/>
								<div>
									<h6 className='h6 whitespace-nowrap'>{elem.city}</h6>
									<p className='bodyText whitespace-nowrap'>{elem.street}</p>
								</div>
							</div>
						)
					})}
				</div>
				<Button
					variant='white'
					size='mdPlus'
					className='mt-6 w650:py-[14px] w650:px-[14px] w420:py-[12px] w420:rounded-[.625rem]'
				>
					Сохранить
				</Button>
			</div>
		</Modal>
	)
}
