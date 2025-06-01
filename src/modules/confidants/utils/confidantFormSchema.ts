import { z } from 'zod'

export const confidantFormSchema = z.object({
	firstName: z
		.string()
		.nonempty('Обязателен для заполнения')
		.min(3, 'Минимальное количество символов 3'),
	lastName: z
		.string()
		.nonempty('Обязателен для заполнения')
		.min(3, 'Минимальное количество символов 3'),
	pin: z
		.string()
		.length(14, 'ИНН должен содержать 14 цифр')
		.regex(/^\d+$/, 'ИНН должен содержать только цифры'),
	phoneNumber: z
		.string()
		.nonempty('Обязателен для заполнения')
		.regex(/^0\d{9}$/, 'Должен быть в формате +996700101010'),
	passportFront: z.custom<File>((file) => file instanceof File && file.size > 0, {
		message: 'Загрузите лицевую сторону паспорта',
	}),
	passportBack: z.custom<File>((file) => file instanceof File && file.size > 0, {
		message: 'Загрузите обратную сторону паспорта',
	}),
})
