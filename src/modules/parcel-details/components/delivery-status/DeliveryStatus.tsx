import { PPData, TrackingResponse } from '@proto/proto/service'
import Image from 'next/image'
import Alien from '../../assets/images/alien.png'

type DeliveryStatusProps = Pick<PPData, 'name' | 'city'> & Pick<TrackingResponse, 'lastStatus'>

export const DeliveryStatus = ({ name, city, lastStatus }: DeliveryStatusProps) => (
	<div className='relative flex justify-between w-full bg-primary rounded-t-2xl rounded-b-lg pt-[22px] pr-6 pb-[46px] pl-5'>
		<div>
			<span className='block text-center font-bold font-lato leading-5 text-base max-w-[211px] w-full bg-secondary rounded-full text-white py-1'>
				{lastStatus}
			</span>
			<p className='text-white leading-4 text-[13px] font-normal font-lato mt-[19px]'>
				Дата принятия: &nbsp;
				<strong className='font-bold text-base leading-5'>02.09.2024</strong>
			</p>
		</div>
		<Image src={Alien} alt='Alien' width={65} priority />
		<p className='absolute left-1/2 -translate-x-1/2 top-[111px] max-w-[310px] w-full bg-success font-lato leading-5 font-bold text-white rounded-t-xl rounded-b-[18px] py-[15px] px-3 text-center'>
			Пункт выдачи: {city}, ул. {name}
		</p>
	</div>
)
