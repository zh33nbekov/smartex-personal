'use client'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { Link } from '@/components/UI/Link'
import { APP_LINKS_KEYS } from '@/consts/common'
import clsx from 'clsx'
import { useState } from 'react'
import { Checkbox } from '../../assets/Checkbox'
import { CheckCircle } from '../../assets/CheckCircle'
import { RESET_PASSWORD_POLITICS } from '../../consts/resetPasswordPolitics'
import { ResetPasswordModal } from '../reset-password-modal/ResetPasswordModal'
import styles from './reset-password.module.css'

export const ResetPassword: React.FC = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<ResetPasswordModal open={open} onClose={handleClose} />
			<section className={styles['reset-password']}>
				<h4 className={clsx(styles['reset-password__title'], 'h4')}>Сброс пароля</h4>
				<p className={clsx(styles['reset-password__description'], 'bodyText')}>
					Установите новый пароль, чтобы вы могли войти в систему
				</p>
				<Input
					type='password'
					className='mb-2'
					label='Текущий пароль'
					placeholder='Текущий пароль'
				/>
				<Input
					type='password'
					className='mb-2'
					label='Новый пароль'
					placeholder='Новый пароль'
				/>
				<Input
					type='password'
					className='mb-2'
					label='Повторите пароль'
					placeholder='Повторите пароль'
				/>
				<div className={clsx(styles['reset-password__politics'], 'h6')}>
					<h6 className={clsx(styles['politics__title'], 'h6')}>Политика паролей</h6>
					<div className={styles['politics__groups']}>
						{RESET_PASSWORD_POLITICS.map(({ text, checked }) => (
							<div key={text} className={styles['politics__group']}>
								{checked ? <CheckCircle /> : <Checkbox />}
								<span className={styles['politics__text']}>{text}</span>
							</div>
						))}
					</div>
				</div>
				<Button size='lg' className='mt-6 w420:py-4 w420:rounded-xl' onClick={handleOpen}>
					Сохранить
				</Button>
				<Link
					href={APP_LINKS_KEYS.setting}
					variant='white'
					size='lg'
					className='mt-2 border-[1px] w420:py-4 w420:rounded-xl'
				>
					Отмена
				</Link>
			</section>
		</>
	)
}
