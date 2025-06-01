'use client'

import { TABLE_TABS } from '@/consts/tableTab'
import { useState } from 'react'
import { ThreeDodIcon } from '../../../public/icons/common/ThreeDodIcon'
import { TableTab } from './TableTab'

export const TableTabs = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	return (
		<div className='flex items-center gap-[22.51px] '>
			<ul className='flex items-center gap-[22.51px]'>
				{TABLE_TABS.map((tab, index) => (
					<TableTab
						key={index}
						tab={tab}
						index={index}
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
					/>
				))}
				<li className='max-w-[100px] py-[14.51px] flex items-center gap-[3.67px] cursor-pointer'>
					<ThreeDodIcon />
				</li>
			</ul>
		</div>
	)
}
