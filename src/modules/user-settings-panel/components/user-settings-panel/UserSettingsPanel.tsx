'use client'

import { Link } from '@/components/UI/Link'
import { ToggleSwitch } from '@/components/UI/ToggleSwitch'
import { APP_LINKS_KEYS } from '@/consts/common'
import clsx from 'clsx'
import { useState } from 'react'
import { CaretRight } from '../../../../../public/icons/common/CaretRight'
import styles from './user-settings-panel.module.css'

export const UserSettingsPanel: React.FC = () => {
	const [statuses, setStatuses] = useState({
		parcelStatus: false,
		promotionsAndDiscounts: false,
		pushNotifications: false,
		emailNotifications: false,
	})

	const handleChange = (label: string, checked: boolean) => {
		setStatuses((prev) => ({ ...prev, [label]: checked }))
	}

	return (
		<section className={styles['user-settings-panel']}>
			<div className={styles['settings-group']}>
				<h6 className={styles['settings-title']}>Уведомления</h6>
				<ToggleSwitch
					label='Статус посылок'
					defaultChecked={statuses.parcelStatus}
					onChange={handleChange}
					className='mb-2'
				/>
				<ToggleSwitch
					label='Промоакции и скидки'
					defaultChecked={statuses.promotionsAndDiscounts}
					onChange={handleChange}
					className='mb-2'
				/>
			</div>
			<div className={styles['settings-group']}>
				<h6 className={styles['settings-title']}>Тип уведомлений</h6>
				<ToggleSwitch
					label='Push-уведомлений'
					defaultChecked={statuses.pushNotifications}
					onChange={handleChange}
					className='mb-2'
				/>
				<ToggleSwitch
					label='Email-уведомлений'
					defaultChecked={statuses.emailNotifications}
					onChange={handleChange}
				/>
			</div>
			<div className={styles['settings-group']}>
				<h6 className={styles['settings-title']}>Безопасность</h6>
				<Link
					href={APP_LINKS_KEYS.resetPassword}
					className={clsx(styles['settings-link'], 'bodyText')}
				>
					Сброс пароля
					<CaretRight fill='#959595' />
				</Link>
			</div>
		</section>
	)
}
