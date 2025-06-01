'use client'

import { HEADER_LINKS } from '@/consts/header'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './header-links.module.css'

export const HeaderLinks: React.FC = () => {
	const pathname = usePathname()

	return (
		<>
			{HEADER_LINKS.map((link) => {
				const isActive = link.path === pathname
				const count = link['data-count']
				const displayCount = count > 9 ? '9+' : count

				return (
					<Link
						key={link.id}
						data-count={displayCount}
						href={link.path}
						className={clsx(styles['header__link'], styles[link.id], {
							[styles.active]: isActive,
						})}
					>
						<link.icon />
						<span className='sr-only'>{link.label}</span>
					</Link>
				)
			})}
		</>
	)
}
