import baseApi from '@/api/api'
import { TrackingResponse } from '@proto/proto/service'

const searchParcelApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		searchParcel: build.query<TrackingResponse, string>({
			query: (tracking) => ({
				url: '/search-parcel',
				method: 'GET',
				params: { tracking },
			}),
		}),
	}),
})

export const { useLazySearchParcelQuery } = searchParcelApi
