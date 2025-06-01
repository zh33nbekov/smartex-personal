'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from '../../../public/icons/common/ChevronDown'

export type Option = {
	label: string
	value: string
}

type SelectProps = {
	label?: string
	value?: string
	options: Option[]
	className?: string
	onChange: (value: string) => void
}

export const Select = ({
	value,
	options,
	onChange,
	className,
	label = 'Выберите нужный вариант',
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	const selectedOption = options?.find((option) => option.value === value)
	const handleToggle = () => setIsOpen((prev) => !prev)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div ref={ref} className='relative w-full'>
			<label
				htmlFor={label}
				className='pb-[4px] inline-block font-lato font-[400] text-primary_text'
			>
				{label}
			</label>
			<button
				id={label}
				type='button'
				onClick={handleToggle}
				className={clsx(
					'font-lato font-[400] text-secondary_text w-full flex justify-between bg-background items-center border-solid border border-border rounded-lg py-4 px-5 hover:border-border_hover outline-1 transition-[border-color] duration-300 ease-in-out',
					{ 'border-border_hover': isOpen },
					className
				)}
			>
				<span>{selectedOption?.label || label}</span>
				<div
					className={clsx('transition-[transform] text-icons duration-300 ease-in-out', {
						'rotate-[-90deg]': isOpen,
					})}
				>
					<ChevronDown />
				</div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.ul
						className='absolute z-10 mt-1 w-full bg-white border border-border rounded-lg shadow-lg overflow-hidden'
						initial={{ opacity: 0, y: -5 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -5 }}
					>
						{options?.map((option) => (
							<li
								key={option.value}
								onClick={() => {
									onChange(option.value)
									setIsOpen(false)
								}}
								className={clsx('font-lato px-4 py-2 cursor-pointer', {
									'bg-background': value === option.value,
									'hover:bg-background_hover': value !== option.value,
								})}
							>
								{option.label}
							</li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	)
}
