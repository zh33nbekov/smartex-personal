import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/api`,
	}),
	endpoints: () => ({}),
})

export default baseApi
