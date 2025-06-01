'use client'

import { Checkmark } from '@/components/UI/Checkmark'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from '../../../../../public/icons/common/ChevronDown'

type Option = {
	label: string
	value: string
	icon?: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
}

type SelectDropdownProps = {
	label?: string
	mainLabel?: string
	value?: string
	variant?: 'checkbox' | 'radio' | 'none'
	className?: string
	options: readonly Option[]
	onChange: (value: string) => void
}

export const SelectDropdown = ({
	value,
	mainLabel = 'Выберите нужный вариант',
	options,
	variant = 'none',
	onChange,
	className,
	label = 'Выберите нужный вариант',
}: SelectDropdownProps) => {
	const [isOpen, setIsOpen] = useState(true)

	const selectedOption = options?.find((option) => option.value === value)
	const handleToggle = () => setIsOpen((prev) => !prev)
	const handleChange = (value: string) => {
		onChange(value)
	}

	return (
		<div className='relative w-full'>
			{mainLabel && (
				<label
					htmlFor={mainLabel}
					className='pb-[4px] inline-block font-lato font-[400] text-primary_text'
				>
					{mainLabel}
				</label>
			)}
			<button
				id={mainLabel}
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
						className='max-h-[156px] overflow-y-auto w-full border border-border border-t-0 overflow-hidden'
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
										'font-lato h-[52px] flex justify-between items-center bg-background border-[0.5px] border-border px-5 cursor-pointer w450:px-3',
										{
											'bg-border': value === option.value,
											'hover:bg-background_hover': value !== option.value,
										},
										!isLast && 'border-b'
									)}
								>
									<div className='flex items-center h-full gap-4'>
										{option.icon && <option.icon className='w-full h-full' />}
										<span className='bodyText select-none'>{option.label}</span>
									</div>
									{variant === 'checkbox' && (
										<Checkmark
											active={isActive}
											className='w-6 h-6 border rounded-0 flex items-center justify-center'
										/>
									)}
									{variant === 'radio' && (
										<Checkmark
											active={isActive}
											className='w-6 h-6 border rounded-full flex items-center justify-center'
										/>
									)}
								</li>
							)
						})}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	)
}
