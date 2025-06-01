import baseApi from '@/api/api'
import { OrdersHistoryRequest, OrdersHistoryResponse } from '@proto/proto/service'

const ordersHistoryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getOrdersHistories: build.query<OrdersHistoryResponse, OrdersHistoryRequest>({
			query: (params) => ({
				url: '/orders/history',
				method: 'GET',
				params,
			}),
		}),
	}),
})

export const { useGetOrdersHistoriesQuery } = ordersHistoryApi
