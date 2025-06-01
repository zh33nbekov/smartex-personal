'use client'

import { ErrorDisplay } from '@/components/error-display/ErrorDisplay'
import { useGetParcelDetailsQuery } from '../../api/parcelDetailsApi'
import { AddComment } from '../add-comment/AddComment'
import { DeliveryStatus } from '../delivery-status/DeliveryStatus'
import { ParcelInformation } from '../parcel-information/ParcelInformation'
import { TrekkingHistory } from '../trekking-history/TrekkingHistory'

export const ParcelDetails = ({ tracking }: { tracking: string }) => {
	const { data, error, isLoading } = useGetParcelDetailsQuery({ tracking })
	if (isLoading) return <div className='text-center py-10'>Загрузка...</div>

	if (error) {
		return (
			<ErrorDisplay
				title='Трек-код не найден'
				description='Пожалуйста, еще раз проверьте код отслеживания и убедитесь, что вы ввели его правильно. Если проблема не устранена, обратитесь в службу поддержки..'
			/>
		)
	}

	if (!isLoading && !error && !data) {
		return <div className='text-center py-10'>Нет заказов</div>
	}

	return (
		<section className='w-full flex gap-6 pt-6 pb-[19px] w1050:flex-col'>
			{data && (
				<>
					<div className='w-1/2 bg-white rounded-2xl w1050:w-full'>
						<DeliveryStatus
							name={data?.PPData?.name}
							city={data?.PPData?.city}
							lastStatus={data?.lastStatus}
						/>
						<ParcelInformation
							name={data?.name}
							weight={data?.weight}
							PPData={data?.PPData}
							tracking={data?.tracking}
							lastStatus={data?.lastStatus}
							trackingData={data?.trackingData}
						/>
						<AddComment />
					</div>
					<TrekkingHistory trackingData={data?.trackingData} />
				</>
			)}
		</section>
	)
}
