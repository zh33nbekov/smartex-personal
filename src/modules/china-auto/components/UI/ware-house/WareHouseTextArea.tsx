import { CopyButton } from '@/components/UI/CopyButton'
import { Address } from '@proto/proto/service'

type WareHouseTextAreaProps = {
	address: Address
}

export const WareHouseTextArea = ({ address }: WareHouseTextAreaProps) => {
	console.log()

	return (
		<div className='w-full border border-secondary rounded-[12px] bg-background px-[20px] py-[10px]'>
			<div className='flex justify-between items-center'>
				<p className='bodyText text-primary_text'>Скопировать весь адрес</p>
				<CopyButton textToCopy='ddkkdkd' />
			</div>
			<div className='mt-6'>
				{address?.city && <p className='bodyText text-primary_text'>{address.city}</p>}
				{address?.line1 && <p className='bodyText text-primary_text'>{address?.line1}</p>}
				{address?.line2 && <p className='bodyText text-primary_text'>{address?.line2}</p>}
				{address?.name && <p className='bodyText text-primary_text'>{address?.name}</p>}
				{address?.phone && <p className='bodyText text-primary_text'>{address?.phone}</p>}
				{address?.state && <p className='bodyText text-primary_text'>{address?.state}</p>}
				{address?.zip && <p className='bodyText text-primary_text'>{address?.zip}</p>}
			</div>
		</div>
	)
}
