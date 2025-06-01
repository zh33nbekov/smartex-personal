import { z } from 'zod'
import { faqFormSchema } from '../utils/faqFormValidation'

export type FaqFormSchema = z.infer<typeof faqFormSchema>
