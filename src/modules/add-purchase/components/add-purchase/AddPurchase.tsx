import { AddAdditionalService } from '../add-additional-service/AddAdditionalService'
import { AddParcelInfo } from '../add-parcel-info/AddParcelInfo'

export const AddPurchase = () => {
	console.log()

	return (
		<section className='relative w-full flex w1050:flex-col justify-between items-start gap-6 mt-[32px]'>
			<AddParcelInfo />
			<AddAdditionalService />
		</section>
	)
}
