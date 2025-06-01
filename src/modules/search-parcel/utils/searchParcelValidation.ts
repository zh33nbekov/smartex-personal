import { z } from 'zod'

export const searchParcelSchema = z.object({
	search: z.string().nonempty('Трекинг номер не может быть пустым'),
})
