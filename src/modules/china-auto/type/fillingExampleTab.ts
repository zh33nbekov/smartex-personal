import { ApplicationType } from './application'

export type FillingExampleTabProps = {
	application: ApplicationType
	setApplicationIdx: React.Dispatch<React.SetStateAction<number | null>>
	index: number
	applicationIdx: number | null
}
