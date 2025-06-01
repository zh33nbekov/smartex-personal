import { z } from 'zod'

export const validationRules = {
	name: z.string().nonempty('Обязателен для заполнения'),
	phoneNumber: z
		.string()
		.nonempty('Обязателен для заполнения')
		.regex(/^0\d{9}$/, 'Должен быть в формате +996700101010'),
	email: z.string().nonempty('Обязателен для заполнения').email('Не валидный email'),
	message: z
		.string()
		.nonempty('Обязателен для заполнения')
		.min(5, 'Минимальное количество символов 5'),
}
