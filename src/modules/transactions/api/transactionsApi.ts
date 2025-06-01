import baseApi from '@/api/api'
import { PaymentsHistoryRequest, PaymentsHistoryResponse } from '@proto/proto/service'

const transactionsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getTransactions: builder.query<PaymentsHistoryResponse, PaymentsHistoryRequest>({
			query: ({ offset, sortBy }) => ({
				url: `/payments/history?page=${offset}&filter=${sortBy}`,
			}),
		}),
	}),
})

export const { useGetTransactionsQuery } = transactionsApi
