import { ResetPasswordPolitics } from '../types/resetPasswordPolitics'

export const RESET_PASSWORD_POLITICS: ResetPasswordPolitics[] = [
	{
		text: 'Длина должна составлять от 8 до 20 символов.',
		checked: true,
	},
	{
		text: 'Сочетание прописных и строчных букв.',
	},
	{
		text: 'Содержит буквы и цифры.',
	},
	{
		text: 'Специальный символ, например @, #. !, * и $.',
	},
]
