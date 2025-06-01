import baseApi from '@/api/api'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

export default store
