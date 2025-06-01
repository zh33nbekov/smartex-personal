import { z } from 'zod'
import { confidantFormSchema } from '../utils/confidantFormSchema'

export type ConfidantFormSchema = z.infer<typeof confidantFormSchema>
