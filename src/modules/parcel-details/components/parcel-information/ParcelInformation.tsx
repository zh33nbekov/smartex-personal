import { TrackingResponse } from '@proto/proto/service'
import Image from 'next/image'
import ParcelImage from '../../assets/images/parcel-image.png'

export const ParcelInformation = (props: TrackingResponse) => {
	const { name, weight, tracking } = props

	return (
		<div className='mt-[70px] w-full'>
			<Image src={ParcelImage} alt={name || ''} priority />
			<ul className='my-6 px-5'>
				<li className='flex justify-between bg-background py-4 px-5 mb-2 border-b border-border rounded-t-xl'>
					<span className='bodyText text-secondary_text'>Получатель:</span>
					<strong className='font-lato font-bold leading-5 text-primary_text'>{name}</strong>
				</li>
				<li className='flex justify-between bg-background py-4 px-5 mb-2 border-b border-border'>
					<span className='bodyText text-secondary_text'>Трек номер:</span>
					<strong className='font-lato font-bold leading-5 text-primary_text'>
						{tracking}
					</strong>
				</li>
				<li className='flex justify-between bg-background py-4 px-5 mb-2 border-b border-border'>
					<span className='bodyText text-secondary_text'>Цена товара:</span>
					<strong className='font-lato font-bold leading-5 text-primary_text'>
						{/* {productPrice} */}
					</strong>
				</li>
				<li className='flex justify-between bg-background py-4 px-5 mb-2 border-b border-border'>
					<span className='bodyText text-secondary_text'>Вес:</span>
					<strong className='font-lato font-bold leading-5 text-primary_text'>{weight}</strong>
				</li>
				<li className='flex justify-between bg-background py-4 px-5 mb-2 border-b border-border'>
					<span className='bodyText text-secondary_text'>Доставка:</span>
					<strong className='font-lato font-bold leading-5 text-primary_text'>
						{/* {delivery} */}
					</strong>
				</li>
			</ul>
		</div>
	)
}
