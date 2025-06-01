'use client'

import { Button } from '@/components/UI/Button'
import clsx from 'clsx'
import { useState } from 'react'
import { TrashBin } from '../../../../../public/icons/common/TrashBin'
import { ListIcon } from '../../assets/ListIcon'
import { DeleteDialog } from '../delete-dialog/DeleteDialog'
import styles from './notification-list.module.css'

const NOTIFICATION_LIST = [
	{
		content: `Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim
		pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id. nunc enim
		dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin`,
		icon: ListIcon,
	},
	{
		content: `Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim
		pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id. nunc enim
		dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin`,
		icon: ListIcon,
	},
	{
		content: `Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim
		pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id. nunc enim
		dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin`,
		icon: ListIcon,
	},
]

export const NotificationList = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<DeleteDialog open={open} onClose={handleClose} />
			<section className={styles['notification-list']}>
				<div className={styles['notification-list__header']}>
					<h4 className={clsx(styles['notification-list__title'], 'h4')}>Уведомление</h4>
					<Button
						size='md'
						onClick={handleOpen}
						className={clsx(styles['notification-list__button'])}
					>
						<span className='w450:hidden'>Очистить</span>
						<TrashBin className='text-red-500 hidden w450:block' />
					</Button>
				</div>
				<div className={styles.list}>
					<div className={styles.list__header}>
						<span className={styles.header__date}>Вторник, 12 Ноя 12:01</span>
					</div>
					{NOTIFICATION_LIST.map(({ content, icon: ListIcon }, index) => (
						<div key={index} className={styles.list__block}>
							<div className={styles.list__icon}>
								<ListIcon />
							</div>
							<p className={styles.list__content}>{content}</p>
						</div>
					))}
				</div>
			</section>
		</>
	)
}
