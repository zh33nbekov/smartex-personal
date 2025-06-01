'use client'
import { TableSort } from '@/components/table/TableSort'
import { Button } from '@/components/UI/Button'
import { Pagination } from '@/components/UI/Pagination'
import { APP_LINKS_KEYS } from '@/consts/common'
import { ParcelsTable } from '@/modules/current-parcels/components/parcels-table/ParcelsTable'
import { useGetOrdersHistoriesQuery } from '@/modules/parcels-from/api/ordersHistoryApi'
import { Country, DeliveryType } from '@proto/proto/service'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { PlusIcon } from '../../../../../public/icons/common/PlusIcon'

type ParcelsFromProps = {
	country: Country
	deliveryType: DeliveryType
}

export const ParcelsFrom = ({ country, deliveryType }: ParcelsFromProps) => {
	const pageSize = 20
	const [page, setPage] = useState(1)

	const offset = useMemo(() => (page - 1) * pageSize, [page, pageSize])

	const { data, isLoading, error } = useGetOrdersHistoriesQuery({
		offset,
		deliveryType: deliveryType,
		country: country,
	})

	const totalOrders = data?.orders?.length ?? 0
	const totalPages = Math.ceil(totalOrders / pageSize)

	const handlePageChange = (newPage: number) => {
		setPage(newPage)
	}

	if (isLoading) return <div className='text-center py-10'>Загрузка...</div>

	if (error) {
		return (
			<div className='text-center text-red-500 py-10'>
				Произошла ошибка при получении заказов
			</div>
		)
	}

	if (!isLoading && !error && !totalOrders) {
		return <div className='text-center py-10'>Нет заказов</div>
	}

	return (
		<section>
			{!isLoading && !error && data?.orders?.length && (
				<div className='w-full mt-[40px] w1350:mt-[75px] flex flex-col items-end gap-[10px]'>
					<Link href={APP_LINKS_KEYS.addPurchase}>
						<Button
							className='hidden top-[-30px] max-w-[251px] min-h-[48px] rounded-[18px] justify-center items-center gap-[10px] w1350:flex'
							variant='success'
						>
							<PlusIcon />
							Добавить покупку
						</Button>
					</Link>
					<div className='relative w-full pt-[11px] border border-border rounded-[18px] overflow-y-auto overflow-x-scroll'>
						<TableSort />
						<div className='w-full w1150:min-w-[1080px] overflow-scroll w1150:overflow-auto'>
							<ParcelsTable orders={data?.orders} />
						</div>
					</div>
					<Pagination
						className='my-6'
						currentPage={page}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
			)}
		</section>
	)
}
