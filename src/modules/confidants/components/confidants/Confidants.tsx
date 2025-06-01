import { AddConfidant } from '../add-confidant/AddConfidant'
import { Recipients } from '../recipients/Recipients'

export const Confidants = () => (
	<section className='relative w-full flex w1050:flex-col-reverse justify-between items-start gap-6'>
		<Recipients />
		<AddConfidant />
	</section>
)
