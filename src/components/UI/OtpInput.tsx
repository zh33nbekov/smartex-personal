'use client'

import React, { useRef, useState } from 'react'

interface OtpInputProps {
	length?: number
	onChange: (code: string) => void
}

export const OtpInput: React.FC<OtpInputProps> = ({ length = 6, onChange }) => {
	const [values, setValues] = useState(Array(length).fill(''))
	const inputsRef = useRef<(HTMLInputElement | null)[]>([])

	const handleChange = (value: string, index: number) => {
		if (!/^\d?$/.test(value)) return

		const newValues = [...values]
		newValues[index] = value
		setValues(newValues)
		onChange(newValues.join(''))

		if (value && index < length - 1) {
			inputsRef.current[index + 1]?.focus()
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
		if (e.key === 'Backspace' && !values[index] && index > 0) {
			inputsRef.current[index - 1]?.focus()
		}
	}

	return (
		<div className='w-full flex justify-between items-center'>
			{values.map((val, idx) => (
				<input
					key={idx}
					ref={(el) => {
						inputsRef.current[idx] = el
					}}
					type='text'
					inputMode='numeric'
					maxLength={1}
					className='w-[70px] h-[70px] w1050:w-[50px] w1050:h-[50px] w950:w-[70px] w950:h-[70px] w650:w-[55px] w650:h-[55px] w550:w-[44px] w550:h-[44px] text-center  text-primary_text border border-border rounded-[2px] focus:outline-none focus:border-secondary focus:text-secondary'
					value={val}
					onChange={(e) => handleChange(e.target.value, idx)}
					onKeyDown={(e) => handleKeyDown(e, idx)}
				/>
			))}
		</div>
	)
}
