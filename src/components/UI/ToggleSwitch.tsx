'use client'

import clsx from 'clsx'
import { useState } from 'react'

type ToggleSwitchProps = {
	label: string
	className?: string
	defaultChecked: boolean
	onChange: (label: string, checked: boolean) => void
}

export const ToggleSwitch = ({ label, className, defaultChecked, onChange }: ToggleSwitchProps) => {
	const [enabled, setEnabled] = useState(defaultChecked)

	const toggle = () => {
		const newState = !enabled
		setEnabled(newState)
		onChange(label, newState)
	}

	return (
		<div
			className={clsx(
				'flex items-center justify-between w-full p-4 bg-background rounded-lg border border-border',
				className
			)}
		>
			<span className='bodyText'>{label}</span>
			<button
				role='switch'
				aria-checked={enabled}
				onClick={toggle}
				className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-300 ease-in-out
          ${enabled ? 'bg-info hover:bg-info_hover' : 'bg-border hover:bg-border_hover'}`}
			>
				<span
					className={`absolute border-2 inline-block h-5 w-5 left-0 transform top-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_4px_#00000026] transition duration-300 ease-in-out
            ${enabled ? 'translate-x-6 border-info' : 'translate-x-0 border-border'}`}
				/>
			</button>
		</div>
	)
}
