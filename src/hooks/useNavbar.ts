/* eslint-disable react-hooks/exhaustive-deps */
import { useNavbarStore } from '@/store/navbar'
import { useCallback } from 'react'

type UseNavbar = {
	open: boolean
	handleClose: () => void
	toggleNavbar: () => void
}

export const useNavbar = (): UseNavbar => {
	const hideNavbar = useNavbarStore((state) => state.hideNavbar)
	const forceCloseNavbar = useNavbarStore((state) => state.forceCloseNavbar)
	const open = useNavbarStore((state) => state.open)
	const showNavbar = useNavbarStore((state) => state.showNavbar)

	const handleClose = useCallback(() => {
		hideNavbar()

		setTimeout(() => {
			forceCloseNavbar()
		}, 300)
	}, [])
	const toggleNavbar = () => {
		if (open) handleClose()
		showNavbar()
	}

	return { open, handleClose, toggleNavbar }
}
