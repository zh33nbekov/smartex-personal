import { z } from 'zod'

export const parcelSchema = z.object({
	category: z.string().min(1, 'Выберите категорию'),
	track: z.string().min(10, 'Минимум 10 символов').max(30, 'Максимум 30 символов'),
	country: z.string().min(1, 'Выберите страну'),
	price: z.number({ invalid_type_error: 'Введите цену' }).min(0, 'Не может быть отрицательной'),
	quantity: z
		.number({ invalid_type_error: 'Введите количество' })
		.int('Должно быть целым')
		.min(1, 'Минимум 1'),
})
