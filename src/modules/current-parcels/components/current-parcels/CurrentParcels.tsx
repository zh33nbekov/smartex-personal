'use client'

import { useGetOrdersHistoriesQuery } from '@/modules/parcels-from/api'
import { Order } from '@proto/proto/service'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ParcelsTable } from '../parcels-table/ParcelsTable'
import styles from './current-parcels.module.css'

export const CurrentParcels: React.FC = () => {
	const [offset, setOffset] = useState(0)
	const [orders, setOrders] = useState<Order[]>([])
	const [hasMore, setHasMore] = useState(true)

	const { data, isLoading, isFetching, error } = useGetOrdersHistoriesQuery(
		{ offset },
		{ skip: !hasMore }
	)

	useEffect(() => {
		if (data?.orders?.length) {
			setOrders((prev) => [...prev, ...(data.orders || [])])
			if (data.orders.length < 20) {
				setHasMore(false)
			}
		} else if (!isFetching && data?.orders?.length === 0) {
			setHasMore(false)
		}
	}, [data, isFetching])

	const observerRef = useRef<IntersectionObserver | null>(null)
	const sentinelRef = useCallback(
		(node: HTMLDivElement) => {
			if (isLoading || isFetching || !hasMore) return
			if (observerRef.current) observerRef.current.disconnect()

			observerRef.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					setOffset((prev) => prev + 1)
				}
			})

			if (node) observerRef.current.observe(node)
		},
		[isLoading, isFetching, hasMore]
	)

	if (isLoading && orders.length === 0) {
		return <div className='text-center py-10'>Загрузка...</div>
	}

	if (error) {
		return (
			<div className='text-center text-red-500 py-10'>
				Произошла ошибка при получении заказов
			</div>
		)
	}

	if (!isLoading && !error && orders.length === 0) {
		return <div className='text-center py-10'>Нет заказов</div>
	}

	return (
		<section className={styles['current-parcels']}>
			{orders.length > 0 && (
				<>
					<div className={styles['current-parcels__header']}>
						<h6 className='h6 mr-4'>Текущие посылки</h6>
						<Link href='' className='bodyText text-secondary_text'>
							Архив
						</Link>
						<Link
							href='/my-parcel'
							className='ml-auto border border-success rounded-lg py-2 px-2 text-secondary_text text-[13px] leading-4 font-lato font-normal hover:bg-success transition hover:text-white'
						>
							См. все
						</Link>
					</div>

					<div className='w-full overflow-x-auto'>
						<ParcelsTable orders={orders} sentinelRef={sentinelRef} isFetching={isFetching} />
					</div>
				</>
			)}
		</section>
	)
}
