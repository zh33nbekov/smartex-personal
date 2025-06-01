import { ConfidantFormField } from '../types/confidantFormFiled'

export const CONFIDANT_FORM_FIELDS: ConfidantFormField[] = [
	{
		name: 'firstName',
		label: 'Имя',
		placeholder: 'Имя',
		type: 'text',
	},
	{
		name: 'lastName',
		label: 'Фамилия',
		placeholder: 'Фамилия',
		type: 'text',
	},
	{
		name: 'pin',
		label: 'ИНН (ПНН)',
		placeholder: '14-значный номер',
		type: 'text',
	},
	{
		name: 'phoneNumber',
		label: 'Номер телефона',
		placeholder: 'Номер телефона',
		type: 'tel',
	},
] as const
