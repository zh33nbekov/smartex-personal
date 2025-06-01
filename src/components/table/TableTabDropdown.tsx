import { TableTabsChildrenType } from '@/types/tableTabs'
import styles from './table-tab-dropdown.module.css'

type TableTabDropdownProps = {
	tabChildren: TableTabsChildrenType[]
	className?: string
}

export const TableTabDropdown = ({ className, tabChildren }: TableTabDropdownProps) => {
	console.log()

	return (
		<div className={`${styles.dropdown_menu} ${className}`}>
			<ul>
				{tabChildren.map((tabChild, idx) => (
					<li key={idx} className='py-1 px-2'>
						<p className='font-rubik text-[16px]'>{tabChild.title}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
