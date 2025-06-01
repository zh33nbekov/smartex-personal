'use client'

import { useState } from 'react'
import { TermsDeliveryModal } from './terms-delivery-modal/TermsDeliveryModal'

export const FreeShippingZone: React.FC = () => {
	const [termsDeliveryOpen, setTermsDeliveryOpen] = useState(false)
	const handleOpen = () => setTermsDeliveryOpen(true)
	const handleClose = () => setTermsDeliveryOpen(false)

	return (
		<>
			<TermsDeliveryModal open={termsDeliveryOpen} onClose={handleClose} />
			<div className='max-w-[528px] max-h-[521px] w-full bg-white pt-6 px-5 pb-10 rounded-2xl flex flex-col w1050:max-w-full w750:pt-5 w750:px-4 w750:pb-9'>
				<h4 className='h4'>Зона бесплатной доставки</h4>
				<button
					onClick={handleOpen}
					className='font-lato font-medium leading-5 text-info block ml-auto mt-6 mb-4 border-b border-info hover:text-info_hover transition w550:mt-3'
				>
					Условия доставки
				</button>
				<div className='relative overflow-hidden max-w-[488px] h-[371px] w-full w1050:max-w-full'>
					<iframe
						src='https://yandex.com/map-widget/v1/?ll=74.586871%2C42.899532&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyOTAxMjUSItCa0YvRgNCz0YvQt9GB0YLQsNC9LCDQkdC40YjQutC10LoiCg0YNZVCFf6AK0I%2C&z=11.63'
						frameBorder='1'
						allowFullScreen
						className='relative w-full h-full'
					></iframe>
				</div>
			</div>
		</>
	)
}
