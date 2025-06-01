import { TableTabsType } from '@/types/tableTabs'
import clsx from 'clsx'
import { TableTabDropdown } from './TableTabDropdown'

type TableTabProps = {
	tab: TableTabsType
	index: number
	activeIndex: number
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

export const TableTab = ({ tab, index, activeIndex, setActiveIndex }: TableTabProps) => (
	<li
		key={index}
		className='relative py-[14.51px] flex items-center gap-[3.67px] cursor-pointer group'
		onClick={() => setActiveIndex(index)}
	>
		<p className='bodyText text-primary_text text-[14px] leading-[18px]'>{tab.title}</p>
		<span
			className={clsx(
				'bg-secondary min-w-[17px] h-[17px] flex justify-center items-center text-center font-roboto text-white text-[11px] rounded-[50%]	pointer-events: none',
				{
					'bg-[#071668]': tab.title === 'На складе',
					'bg-success': tab.title === 'В процессе',
				}
			)}
		>
			99+
		</span>
		<div
			className={clsx('opacity-0 h-[2px] w-full bg-primary absolute bottom-[-8px]', {
				'opacity-100': activeIndex === index,
			})}
		></div>
		{tab.children && <TableTabDropdown className='group-hover:flex' tabChildren={tab.children} />}
	</li>
)
