export type NavbarLink = {
	path?: string
	label: string
	icon: () => React.JSX.Element
	children?: {
		path: string
		label: string
	}[]
}
