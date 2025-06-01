'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const Preloader = () => {
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return

	return createPortal(
		<div className='fixed top-0 left-0 w-screen h-screen bg-[#1111119d]'>
			<div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full border-[var(--secondary)_white_var(--secondary)_white] animate-spin border-[3.6px]' />
		</div>,
		document.body
	)
}
