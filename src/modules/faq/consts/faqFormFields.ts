import { FaqFormField } from '../types/faqFormField'

export const FAQ_FORM_FIELDS: FaqFormField[] = [
	{
		name: 'name',
		label: 'Имя',
		placeholder: 'Имя',
		type: 'text',
	},
	{
		name: 'phoneNumber',
		label: 'Номер телефона',
		placeholder: 'Номер телефона',
		type: 'tel',
	},
	{
		name: 'email',
		label: 'Электронный адрес',
		placeholder: 'Электронный адрес',
		type: 'email',
	},
] as const
