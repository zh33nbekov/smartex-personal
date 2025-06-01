'use client'

import { Checkmark } from '@/components/UI/Checkmark'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from '../../../../../public/icons/common/ChevronDown'

type Option = {
	label: string
	value: string
	icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
}

type DepositMethodSelectProps = {
	label?: string
	value?: string
	className?: string
	options: readonly Option[]
	onChange: (value: string) => void
}

export const DepositMethodSelect = ({
	value,
	options,
	onChange,
	className,
	label = 'Выберите нужный вариант',
}: DepositMethodSelectProps) => {
	const [isOpen, setIsOpen] = useState(true)

	const selectedOption = options?.find((option) => option.value === value)
	const handleToggle = () => setIsOpen((prev) => !prev)
	const handleChange = (value: string) => {
		onChange(value)
	}

	return (
		<div className='relative w-full'>
			<label
				htmlFor={label}
				className='pb-[4px] inline-block font-lato font-[400] text-primary_text'
			>
				{label}
			</label>
			<button
				id={label}
				onClick={handleToggle}
				className={clsx(
					'font-lato font-[400] text-secondary_text w-full flex justify-between bg-background items-center border-solid border border-border py-4 px-5 hover:border-border_hover outline-1 transition-all duration-300 ease-in-out w450:px-3 w450:py-3',
					{ 'border-border_hover': isOpen },
					className,
					isOpen ? 'rounded-t-lg' : 'rounded-lg'
				)}
			>
				<span className='text-nowrap'>{selectedOption?.label || label}</span>
				<div
					className={clsx('transition-[transform] duration-300 ease-in-out', {
						'rotate-[-90deg]': isOpen,
					})}
				>
					<ChevronDown
						className={clsx(
							'transition-all duration-300',
							isOpen ? 'text-secondary' : 'text-icons'
						)}
					/>
				</div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.ul
						className='max-h-[265px] overflow-y-auto w-full bg-white border border-border border-t-0 rounded-b-lg overflow-hidden'
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						{options?.map((option, index) => {
							const isLast = index === options.length - 1
							const isActive = value === option.value

							return (
								<li
									key={option.value}
									onClick={handleChange.bind(null, option.value)}
									className={clsx(
										'font-lato flex justify-between items-center border-border px-5 py-[6px] cursor-pointer w450:px-3',
										{
											'bg-background': value === option.value,
											'hover:bg-background_hover': value !== option.value,
										},
										!isLast && 'border-b'
									)}
								>
									<div className='flex items-center gap-4'>
										<div className='w-[40px] h-[40px] w750:w-[33px] w750:h-[33px] w450:w-[30px] w450:h-[30px]'>
											{<option.icon className='w-full h-full' />}
										</div>
										<span className='bodyLarge select-none'>{option.label}</span>
									</div>
									<Checkmark
										active={isActive}
										className='w-6 h-6 border rounded-full flex items-center justify-center'
									/>
								</li>
							)
						})}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	)
}
