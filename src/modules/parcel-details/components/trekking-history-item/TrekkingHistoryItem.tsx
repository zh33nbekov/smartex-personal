import { formatDateTime } from '@/utils/formatDateTime'
import { TrackingData } from '@proto/proto/service'
import { TrekkingHistoryIcon } from '../../assets/icons/TrekkingHistoryIcon'

export const TrekkingHistoryItem = (props: TrackingData) => {
	const { status, timeStamp, statusNote } = props
	const { date, time } = formatDateTime(timeStamp)

	return (
		<li className='flex mb-4 py-4 px-5 gap-4 before:content-[""] before:absolute before:left-[39px] before:z-[-1] before:top-0 before:bottom-0 before:border-[1px] before:border-dashed before:border-border before:border-l'>
			<div className='flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-secondary'>
				<TrekkingHistoryIcon />
			</div>
			<div>
				<h5 className='bodyBold'>{status}</h5>
				<p className='bodyText'>{statusNote}</p>
			</div>
			<div className='ml-auto flex-shrink-0 text-right'>
				<h6 className='bodyBold'>{date || 'Дата неизвестна'}</h6>
				<p className='bodyText'>{time || 'Время неизвестна'}</p>
			</div>
		</li>
	)
}
