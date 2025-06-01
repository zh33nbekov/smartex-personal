'use client'

import { APP_LINKS_KEYS, pathSegmentNameMap } from '@/consts/common'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconRight } from '../../../public/icons/common/IconRight'

export const Breadcrumbs = () => {
	const pathname = usePathname()
	const pathSegments = pathname.split('/').filter(Boolean)
	const breadcrumbs = pathSegments.map((segment, index) => {
		const href = `/${pathSegments.slice(0, index + 1).join('/')}`
		const isLast = index === pathSegments.length - 1
		const label = pathSegmentNameMap[segment] || segment
		const isDisabled = segment === 'my-parcel' || segment === 'foreign-addresses'

		if (isDisabled) {
			return (
				<span key={href} className={clsx('text-secondary_text text-nowrap mr-1')}>
					{label}
				</span>
			)
		}

		if (isLast) {
			return (
				<span key={href} className={clsx('text-secondary text-nowrap')}>
					{label}
				</span>
			)
		}

		return (
			<Link
				key={href}
				href={href}
				className='text-secondary_text border-b-[1px] border-transparent hover:border-b-[1px] transition-[border-color] ease-in-out hover:border-border flex items-center gap-1 mr-1'
			>
				{label}
			</Link>
		)
	})

	return (
		<div className='pt-[20px] mb-[20px] pb-3 flex overflow-x-auto' aria-label='breadcrumbs'>
			<Link
				href={APP_LINKS_KEYS.home}
				className='text-secondary_text text-nowrap border-b-[1px] border-transparent hover:border-b-[1px] transition-[border-color] ease-in-out hover:border-border flex items-center gap-1 mr-1'
			>
				Главная
			</Link>
			{breadcrumbs.map((crumb, idx) => (
				<span key={idx} className='flex items-center gap-2'>
					<IconRight /> {crumb}
				</span>
			))}
		</div>
	)
}
