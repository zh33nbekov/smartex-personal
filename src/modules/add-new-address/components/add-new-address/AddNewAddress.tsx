'use client'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { TextArea } from '@/components/UI/TextArea'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export const AddNewAddress: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleToggle = () => setIsOpen((prev) => !prev)

	return (
		<div className='bg-white py-10 px-5 rounded-2xl w750:px-4 w750:py-8 w550:py-6 w550:rounded-xl'>
			<button
				onClick={handleToggle}
				className={clsx(
					'w-full border font-lato duration-300 transition py-5 px-[0.625rem] rounded-2xl font-bold leading-[1.25rem] text-secondary_text w750:py-4 w550:rounded-xl',
					isOpen
						? 'bg-primary hover:bg-primary_hover text-white'
						: 'bg-background hover:bg-background_hover'
				)}
			>
				+ Добавить новый адрес
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='mt-6'
					>
						<h4 className='h4'>Новый адрес</h4>
						<p className='mt-3 mb-6'>
							Укажите ваш дом на карте, переместив на него маркер либо кликнув по нему на
							карте! За указание не верных координат с Вашего баланса будет списано 200сом
							после неудачной доставки!
						</p>
						<div>
							<Input
								autoComplete='on'
								label='Мкр / жм / улица / дом / кв'
								placeholder='Укажите адрес доставки'
								className='mb-4'
							/>
							<Input
								autoComplete='on'
								className='mb-4'
								label='Номер телефона'
								placeholder='Номер телефона'
							/>
							<TextArea
								autoComplete='on'
								className='h-[70px]'
								label='Добавьте свой комментарий'
								placeholder='Комментарий'
								resize
							/>
							<div className='flex mt-[27px] gap-4'>
								<Button
									variant='success'
									className='max-w-[157px] py-[.625rem] text-[13px] leading-4 font-normal'
								>
									Добавить заметки
								</Button>
								<Button
									variant='error'
									className='max-w-[92px] py-[.625rem] text-[13px] leading-4 font-normal'
								>
									Удалить
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
