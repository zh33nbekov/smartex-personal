import { z } from 'zod'
import { searchParcelSchema } from '../utils/searchParcelValidation'

export type SearchParcelType = z.infer<typeof searchParcelSchema>
