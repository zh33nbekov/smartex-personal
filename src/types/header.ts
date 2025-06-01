export type HeaderLink = {
	path: string
	label: string
	'data-count': number
	icon: () => React.JSX.Element
	id: 'notification' | 'message' | 'setting'
}
