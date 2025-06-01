import baseApi from '@/api/api'
import { WarehouseAddressesResponse } from '@proto/grpc/service'

const warehouseAddressesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getWarehouseAddresses: build.query<WarehouseAddressesResponse, unknown>({
			query: () => ({
				url: '/warehouse-addresses',
				method: 'GET',
			}),
		}),
	}),
})

export const { useGetWarehouseAddressesQuery } = warehouseAddressesApi
