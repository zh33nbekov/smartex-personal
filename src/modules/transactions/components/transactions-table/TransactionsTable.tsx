import { formatDateTime } from '@/utils/formatDateTime'
import { Payment } from '@proto/proto/service'
import styles from './transactions-table.module.css'

type TransactionsTableProps = {
	payments?: Payment[]
}

export const TransactionsTable = ({ payments }: TransactionsTableProps) => (
	<table className={styles['parcels-table']}>
		<thead className={styles['table-header']}>
			<tr className={styles['table-row']}>
				<th className={styles['table-heading']}>№ платежа</th>
				<th className={styles['table-heading']}>Дата и время</th>
				<th className={styles['table-heading']}>Примечание</th>
				<th className={styles['table-heading']}>Номер отправок</th>
				<th className={styles['table-heading']}>Вес</th>
				<th className={styles['table-heading']}>Цена</th>
			</tr>
		</thead>
		<tbody className={styles['table-body']}>
			{payments?.map((data) => {
				const { date, time } = formatDateTime(data.date)

				return (
					<tr key={data.id} className={styles['table-row']}>
						<td className={styles['table-data']}>
							<span className=''>№{data.id}</span>
						</td>
						<td className={styles['table-data']}>
							<span className=''>
								{date}, {time}
							</span>
						</td>
						<td className={styles['table-data']}>{data.notes}</td>
						<td className={styles['table-data']}>{data.awb}</td>
						<td className={styles['table-data']}>{data.weight}</td>
						<td className={styles['table-data']}>{data.value}</td>
					</tr>
				)
			})}
		</tbody>
	</table>
)
