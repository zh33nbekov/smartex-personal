'use client'

import { APP_LINKS_KEYS } from '@/consts/common'
import { useNavbar } from '@/hooks/useNavbar'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'
import { HeaderLinks } from './HeaderLinks'
import Avatar from './image.png'

export const Header = () => {
	const { open, toggleNavbar } = useNavbar()

	return (
		<header className={clsx(styles.header)}>
			<div className={clsx(styles.header__left)}>
				<div className={clsx(styles.code)}>
					<span className={clsx(styles.code__summary, styles.summary)}>
						Ваш код: <strong>2KR00TD</strong>
					</span>
					<button className={styles.code__action}>Сканировать</button>
				</div>
				<div className={styles.balance}>
					<span className={clsx(styles.balance__summary, styles.summary)}>
						Ваш баланс: <strong>2.09 $ (145 сом)</strong>
					</span>
					<Link href={APP_LINKS_KEYS.topUp} className={styles.balance__action}>
						Пополнить
					</Link>
				</div>
			</div>
			<div className={styles.header__right}>
				<div className={styles.actions}>
					<HeaderLinks />
					<div
						className={clsx(styles.action, styles.toggle, { [styles.open]: open })}
						onClick={toggleNavbar}
					>
						<span className={styles.toggle__span} />
						<span className={styles.toggle__span} />
						<span className={styles.toggle__span} />
					</div>
				</div>
				<div className={styles.profile}>
					<span className={clsx(styles.profile__name, 'h6')} title='Rai Zheenbekov'>
						Rai Zheenbekov
					</span>
					<div className={styles.profile__avatar}>
						<Image src={Avatar} alt='Name' width='56' height='56' />
					</div>
				</div>
			</div>
		</header>
	)
}
