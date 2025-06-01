import { z } from 'zod'
import { additionalServiceSchema } from '../schema/additionalService'

export type AdditionalServiceFormType = z.infer<typeof additionalServiceSchema>
