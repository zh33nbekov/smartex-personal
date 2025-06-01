import { AddressAccordionProps } from '../../type/addressAccordion'
import { AccordionItem } from '../UI/accordion-item/AccordionItem'

export const AddressAccordion = ({
	foreignAddresses,
	setAddressIndex,
	addressIndex,
}: AddressAccordionProps) => (
	<div className='w-[528px] w650:w-full bg-white px-[20px] pt-[24px] pb-[40px] rounded-2xl'>
		<h4 className='h4 text-primary_text'>Зарубежные адреса</h4>
		<div className='w-full mt-[24px] flex flex-col gap-4'>
			{foreignAddresses.map((address, index) => (
				<AccordionItem
					key={address.title}
					address={address}
					setAddressIndex={setAddressIndex}
					index={index}
					addressIndex={addressIndex}
				/>
			))}
		</div>
	</div>
)
