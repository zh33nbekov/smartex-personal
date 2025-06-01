'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop } from './Backdrop'

type ModalProps = {
	open: boolean
	onClose?: () => void
	children: React.ReactNode
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return

	return createPortal(
		<>
			<Backdrop open={open} onClose={onClose} />
			<div
				className={clsx(
					'z-50 fixed top-1/2 left-1/2 transition-opacity-visibility duration-300 ease-in-out translate-x-[-50%] translate-y-[-50%]',
					open ? 'opacity-1 visible scale-100' : 'opacity-0 invisible scale-75'
				)}
			>
				{children}
			</div>
		</>,
		document.body
	)
}
