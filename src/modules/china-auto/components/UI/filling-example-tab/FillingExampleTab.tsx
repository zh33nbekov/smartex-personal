import { FillingExampleTabProps } from '@/modules/china-auto/type/fillingExampleTab'
import clsx from 'clsx'
import Image from 'next/image'

export const FillingExampleTab = ({
	application,
	setApplicationIdx,
	index,
	applicationIdx,
}: FillingExampleTabProps) => (
	<div
		onClick={() => setApplicationIdx(index)}
		className={clsx(
			'w-full flex items-center gap-4 border border-border bg-background py-[16px] px-[20px] rounded-2xl cursor-pointer',
			{
				'border-secondary': applicationIdx === index,
			}
		)}
	>
		{application.image && (
			<div className='w-10 h-10 border border-border rounded-[8px] overflow-hidden'>
				<Image
					src={application.image}
					alt={application.title}
					width={40}
					height={40}
					className='w-full h-full object-cover'
				/>
			</div>
		)}
		<p className='bodyLarge text-primary_text'>{application.title}</p>
	</div>
)
