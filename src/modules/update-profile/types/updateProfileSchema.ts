import { z } from 'zod'
import { updateProfileSchema } from '../utils/updateProfileValidation'

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>
