'use client'

import { APP_LINKS_KEYS } from '@/consts/common'
import { useNavbar } from '@/hooks/useNavbar'
import { useNavbarStore } from '@/store/navbar'
import clsx from 'clsx'
import Link from 'next/link'
import { useRef } from 'react'
import { Close } from '../../../public/icons/common/Close'
import { DesktopLogo } from '../../../public/icons/common/DesktopLogo'
import { MobileLogo } from '../../../public/icons/common/MobileLogo'
import { Logout } from '../../../public/icons/navbar/Logout'
import styles from './navbar.module.css'
import { NavbarLinks } from './NavbarLinks'

export const Navbar = () => {
	const { handleClose } = useNavbar()
	const animationClass = useNavbarStore((state) => state.animationClass)
	const navbarRef = useRef<null | HTMLElement>(null)

	return (
		<nav
			ref={navbarRef}
			className={clsx(styles.navbar, 'hide-native-scrollbar', {
				[styles[animationClass]]: animationClass,
			})}
		>
			<button onClick={handleClose} className={clsx(styles['close-button'])}>
				<Close className='w-full h-full' />
			</button>
			<Link href={APP_LINKS_KEYS.home} className={styles.navbar__logo}>
				<MobileLogo className={clsx(styles.logo, styles.mobile)} />
				<DesktopLogo className={clsx(styles.logo, styles.desktop)} />
			</Link>
			<NavbarLinks />
			<button onClick={() => alert('Вы вышли из системы!')} className={styles.navbar__logout}>
				<div className={styles.nav__icon}>
					<Logout />
				</div>
				<span className={styles['nav__label']}>Выйти</span>
			</button>
		</nav>
	)
}
