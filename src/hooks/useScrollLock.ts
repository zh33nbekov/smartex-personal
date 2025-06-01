'use client'

import { useEffect } from 'react'

export const useScrollLock = (open: boolean) => {
	useEffect(() => {
		if (open) {
			window.document.documentElement.style.overflow = 'hidden'
		} else {
			window.document.documentElement.removeAttribute('style')
		}
	}, [open])
}
