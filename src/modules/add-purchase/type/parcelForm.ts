import { z } from 'zod'
import { parcelSchema } from '../schema/parcelInfoSchema'

export type ParcelForm = z.infer<typeof parcelSchema>
