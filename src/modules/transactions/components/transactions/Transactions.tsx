'use client'

import { Pagination } from '@/components/UI/Pagination'
import { PaymentType } from '@proto/proto/service'
import { useState } from 'react'
import { useGetTransactionsQuery } from '../../api/transactionsApi'
import { TransactionFilter } from '../transaction-filter/TransactionFilter'
import { TransactionsTable } from '../transactions-table/TransactionsTable'

export const Transactions = () => {
	const [page, setPage] = useState(1)
	const [filter, setFilter] = useState<PaymentType>(PaymentType.ALL)
	const { data, isLoading } = useGetTransactionsQuery({ offset: page, sortBy: filter })
	const payments = data?.payments ?? []
	const handlePageChange = (page: number) => setPage(page)
	const handleFilterChange = (newFilter: PaymentType) => {
		setFilter(newFilter)
		setPage(1)
	}

	return (
		<section>
			<h4 className='h4 bg-white py-[11px] px-2 rounded-t-xl border-b border-border'>
				Транзакции
			</h4>
			<div className='w-full overflow-x-auto pl-5 w650:pl-0'>
				<TransactionFilter current={filter} onChange={handleFilterChange} />
				{isLoading ? (
					<p className='text-center py-6'>Загрузка...</p>
				) : (
					<>
						<TransactionsTable payments={payments} />
						<Pagination
							className='my-6'
							currentPage={page}
							totalPages={Math.ceil((payments.length ?? 0) / 20)}
							onPageChange={handlePageChange}
						/>
					</>
				)}
			</div>
		</section>
	)
}
