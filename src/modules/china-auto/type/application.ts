import { StaticImageData } from 'next/image'

export type ApplicationType = {
	title: string
	content: () => React.JSX.Element
	image?: StaticImageData
}
