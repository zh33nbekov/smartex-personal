'use client'

import store from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

type ReduxProviderProps = {
	children: React.ReactNode
}

const ReduxProvider = ({ children }: ReduxProviderProps) => (
	<Provider store={store}>{children}</Provider>
)

export default ReduxProvider
