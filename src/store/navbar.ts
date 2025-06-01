import { create } from 'zustand'

type NavbarState = {
	open: boolean
	activeSubnav: string
	animationClass: string
	showNavbar: () => void
	hideNavbar: () => void
	forceCloseNavbar: () => void
	clearActiveSubnav: () => void
	setActiveSubnav: (label: string) => void
}

export const useNavbarStore = create<NavbarState>((set) => ({
	open: false,
	activeSubnav: '',
	animationClass: '',

	clearActiveSubnav: () => set({ activeSubnav: '' }),
	setActiveSubnav: (label) => set({ activeSubnav: label }),
	showNavbar: () => set({ open: true, animationClass: 'open' }),
	hideNavbar: () => {
		set({ animationClass: 'hidden' })
	},
	forceCloseNavbar: () => {
		set({ open: false, animationClass: '' })
	},
}))
