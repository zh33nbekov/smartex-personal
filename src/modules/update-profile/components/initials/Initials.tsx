import { Input } from '@/components/UI/Input'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { UpdateProfileSchema } from '../../types/updateProfileSchema'

const INITIALS_INPUTS = [
	{
		name: 'lastName',
		type: 'text',
		label: 'Фамилия',
		placeholder: 'Фамилия',
	},
	{
		name: 'name',
		type: 'text',
		label: 'Имя',
		placeholder: 'Имя',
	},
	{
		name: 'phoneNumber',
		type: 'text',
		label: 'Номер телефона',
		placeholder: 'Номер телефона',
	},
	{
		name: 'email',
		type: 'email',
		label: 'Электронная почта',
		placeholder: 'Электронная почта',
	},
] as const

type InitialsProps = {
	errors: FieldErrors<UpdateProfileSchema>
	register: UseFormRegister<UpdateProfileSchema>
}

export const Initials = ({ errors, register }: InitialsProps) => (
	<>
		{INITIALS_INPUTS.map((input) => (
			<Input
				type={input.type}
				key={input.label}
				label={input.label}
				placeholder={input.placeholder}
				wrapperStyles='mb-4'
				errorMessage={errors[input.name]?.message}
				{...register(input.name)}
			/>
		))}
	</>
)
