import { WORK_DAYS } from '../../consts/workDays'

export const WorkingDays = () => (
	<div className='flex flex-col'>
		{WORK_DAYS.map((day) => (
			<div
				key={day.day}
				className='w-full px-[20px] py-[16px] flex items-center justify-between border-b border-b-border bg-background gap-[11px]'
			>
				<p className='bodyText text-secondary_text text-start'>{day.day}</p>
				<p className='bodyEmphasized text-primary_text text-end'>{day.time}</p>
			</div>
		))}
	</div>
)
