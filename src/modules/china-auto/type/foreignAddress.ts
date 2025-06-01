export type ForeignAddress = {
	title: string
	summary?: string
	icon?: (props: React.SVGAttributes<SVGSVGElement>) => React.JSX.Element
	content: React.ComponentType | (() => React.JSX.Element)
	contentTitle?: string
	subtitle?: string
}
