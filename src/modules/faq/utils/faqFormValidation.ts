import { validationRules } from '@/utils/validationRules'
import { z } from 'zod'

export const faqFormSchema = z.object({
	name: validationRules.name,
	phoneNumber: validationRules.phoneNumber,
	email: validationRules.email,
	message: validationRules.message,
})
