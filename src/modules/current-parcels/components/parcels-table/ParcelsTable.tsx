import { formatDateTime } from '@/utils/formatDateTime'
import { Order } from '@proto/proto/service'
import Link from 'next/link'
import styles from './parcels-table.module.css'

type ParcelsTableProps = {
	orders: Order[]
	isFetching?: boolean
	sentinelRef?: (node: HTMLTableRowElement) => void
}

export const ParcelsTable = ({ orders, isFetching, sentinelRef }: ParcelsTableProps) => (
	<table className={styles['parcels-table']}>
		<thead className={styles['table-header']}>
			<tr className={styles['table-row']}>
				<th className={styles['table-heading']}>Дата</th>
				<th className={styles['table-heading']}>№</th>
				<th className={styles['table-heading']}>Трек</th>
				<th className={styles['table-heading']}>Наименование</th>
				{/* <th className={styles['table-heading']}>Статус</th> */}
				{/* <th className={styles['table-heading']}>Количество</th> */}
				{/* <th className={styles['table-heading']}>Цена</th> */}
				<th className={styles['table-heading']}>Вес</th>
				<th className={styles['table-heading']}>AWB</th>
			</tr>
		</thead>
		<tbody className={styles['table-body']}>
			<>
				{orders.map((order, index) => {
					const { date, time } = formatDateTime(order.date)
					return (
						<tr key={index} className={styles['table-row']}>
							<td className={styles['table-orde']}>
								{date}, {time}
							</td>
							<td className={styles['table-order']}>{order.awb}</td>
							<td className={styles['table-order']}>
								<Link
									href={`/my-parcel/${order.tracking}`}
									className='text-info hover:text-info_hover max-w-[150px] block w-full overflow-hidden overflow-ellipsis'
								>
									{order.tracking}
								</Link>
							</td>
							<td className={styles['table-order']}>{order.content}</td>
							{/* {order.status && <td className={styles['table-order']}>{order.status}</td>} */}
							{/* {order.quantity && <td className={styles['table-order']}>{order.quantity}</td>} */}
							{/* {order.price && <td className={styles['table-order']}>{order.price}</td>} */}
							<td className={styles['table-order']}>{order.weight}</td>
							<td className={styles['table-order']}>{order.awb}</td>
						</tr>
					)
				})}
				<tr ref={sentinelRef} className='flex justify-center mx-auto text-center py-4'>
					{isFetching && <td>Загружаем ещё...</td>}
				</tr>
			</>
		</tbody>
	</table>
)
