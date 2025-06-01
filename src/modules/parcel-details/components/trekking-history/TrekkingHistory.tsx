'use client'

import { Button } from '@/components/UI/Button'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowDown } from '../../assets/icons/ArrowDown'
import { TrekkingHistoryItem } from '../trekking-history-item/TrekkingHistoryItem'
import { TrackingData } from '@proto/proto/service'

type TrekkingHistoryProps = {
	trackingData?: TrackingData[]
}

export const TrekkingHistory = ({ trackingData }: TrekkingHistoryProps) => {
	const [isOpen, setIsOpen] = useState(true)
	const toggleOpen = () => setIsOpen((prev) => !prev)

	return (
		<div className='w-1/2 w1050:w-full'>
			<div className='bg-white rounded-2xl pt-6 pb-8'>
				<div className='px-5'>
					<div className='flex justify-between pb-6'>
						<h6 className='h6'>История треккинг</h6>
						<button
							onClick={toggleOpen}
							className={clsx(
								'flex items-center gap-[9px] text-info font-medium font-lato leading-5 transition hover:text-info_hover',
								isOpen && 'text-info_hover'
							)}
						>
							{isOpen ? 'Свернуть' : 'Развернуть'}
							<ArrowDown className='transition' />
						</button>
					</div>
					<div className='max-h-[628px] overflow-y-auto'>
						<AnimatePresence initial={false}>
							{isOpen && (
								<motion.ul
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
									className='z-10 relative'
								>
									{trackingData?.map((elem) => (
										<TrekkingHistoryItem
											key={elem.status}
											status={elem.status}
											statusNote={elem.statusNote}
											timeStamp={elem.timeStamp}
										/>
									))}
								</motion.ul>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
			<Button size='lg' variant='white' className='mt-8 w750:py-4'>
				Нужна помощь
			</Button>
		</div>
	)
}
