import React from 'react'
import { Checkmark } from './Checkmark'

type CheckboxPropsType = {
	name: string
	checked: boolean
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Checkbox = ({ name, checked, onChange }: CheckboxPropsType) => (
	<label className='cursor-pointer'>
		<input
			id={name}
			name={name}
			type='checkbox'
			checked={checked}
			onChange={onChange}
			className='hidden peer'
		/>
		<Checkmark
			active={checked}
			className='w-[24px] h-[24px] rounded-[4px] border border-border flex justify-center items-center'
		/>
	</label>
)
