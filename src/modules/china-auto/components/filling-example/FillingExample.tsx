import { useState } from 'react'
import { APPLICATIONS } from '../../consts/applications'
import { ApplicationType } from '../../type/application'
import { FillingExampleTab } from '../UI/filling-example-tab/FillingExampleTab'

export const FillingExample = () => {
	const [applicationIdx, setApplicationIdx] = useState<number | null>(null)

	const actualContent: ApplicationType | undefined =
		applicationIdx !== null ? APPLICATIONS[applicationIdx] : undefined
	const ActualComponent = actualContent?.content

	return (
		<div className='flex flex-col gap-4'>
			{APPLICATIONS.map((application, index) => (
				<div key={index} className='flex flex-col gap-4'>
					<FillingExampleTab
						application={application}
						setApplicationIdx={setApplicationIdx}
						index={index}
						applicationIdx={applicationIdx}
					/>
					{index === applicationIdx && ActualComponent && <ActualComponent />}
				</div>
			))}
		</div>
	)
}
