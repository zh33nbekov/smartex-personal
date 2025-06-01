import baseApi from '@/api/api'
import { TrackingRequest, TrackingResponse } from '@proto/proto/service'

const searchParcelApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getParcelDetails: build.query<TrackingResponse, TrackingRequest>({
			query: ({ tracking }) => ({ url: `/search-parcel?tracking=${tracking}` }),
		}),
	}),
})

export const { useGetParcelDetailsQuery } = searchParcelApi
