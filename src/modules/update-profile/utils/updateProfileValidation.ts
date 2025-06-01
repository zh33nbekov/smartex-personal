import { validationRules } from '@/utils/validationRules'
import { z } from 'zod'

export const updateProfileSchema = z.object({
	lastName: z.string().nonempty('Обязателен для заполнения'),
	name: validationRules.name,
	phoneNumber: validationRules.phoneNumber,
	email: validationRules.email,
	message: validationRules.message,
})
