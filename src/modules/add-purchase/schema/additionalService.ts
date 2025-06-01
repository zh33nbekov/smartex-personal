import { z } from 'zod'

export const additionalServiceSchema = z.object({
	box: z.string().min(1, 'Выберите категорию'),
	comment: z.string(),
})
