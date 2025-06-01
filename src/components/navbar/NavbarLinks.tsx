'use client'

import { pathSegmentNameMap } from '@/consts/common'
import { NAVBAR_LINKS } from '@/consts/navbar'
import { useNavbarStore } from '@/store/navbar'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Caret } from '../../../public/icons/common/Caret'
import styles from './navbar-links.module.css'

export const NavbarLinks = () => {
	const pathname = usePathname()
	const pathSegments = pathname.split('/').filter(Boolean)
	const activeSubnav = useNavbarStore((state) => state.activeSubnav)
	const setActiveSubnav = useNavbarStore((state) => state.setActiveSubnav)
	const clearActiveSubnav = useNavbarStore((state) => state.clearActiveSubnav)

	useEffect(() => {
		const matchedLabel = pathSegments.map((segment) => pathSegmentNameMap[segment]).find(Boolean)

		if (matchedLabel) {
			setActiveSubnav(matchedLabel)
		} else {
			clearActiveSubnav()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, setActiveSubnav, clearActiveSubnav])

	const toggleSubnav = (label: string, hasChildren: boolean) => {
		if (!hasChildren) return
		if (activeSubnav === label) {
			clearActiveSubnav()
		} else {
			setActiveSubnav(label)
		}
	}

	return (
		<ul className={styles.navbar__nav}>
			{NAVBAR_LINKS.map((link) => {
				const isActive = pathname === link.path || activeSubnav === link.label
				const isOpen = activeSubnav === link.label

				return (
					<li key={link.label} className={styles.nav__item}>
						<Link
							href={link.path || ''}
							onClick={() => toggleSubnav(link.label, !!link.children)}
							className={clsx(
								styles.nav__link,
								{ [styles.active]: isActive },
								{ [styles['has-children']]: !!link.children && isOpen }
							)}
						>
							<div className={styles.nav__content}>
								<div className={styles.nav__icon}>{<link.icon />}</div>
								<span className={clsx(styles['nav__link-label'], styles['nav__label'])}>
									{link.label}
								</span>
							</div>

							{link.children && (
								<motion.div
									animate={{ rotate: isOpen ? 90 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<Caret
										className={clsx(styles['nav__link-icon'], { [styles.open]: isOpen })}
									/>
								</motion.div>
							)}
						</Link>

						{link.children && (
							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.ul
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className={styles.nav__subnav}
										style={{ overflow: 'hidden' }}
									>
										{link.children.map((child) => {
											const isActive = child.path === pathname

											return (
												<li key={child.label} className={styles.subnav__item}>
													<Link
														href={child.path}
														className={clsx(styles.subnav__link, {
															[styles.active]: isActive,
														})}
													>
														{child.label}
													</Link>
												</li>
											)
										})}
									</motion.ul>
								)}
							</AnimatePresence>
						)}
					</li>
				)
			})}
		</ul>
	)
}
