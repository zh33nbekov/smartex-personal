'use client'

import { Modal } from '@/components/UI/Modal'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { Close } from '../../../public/icons/common/Close'
import { AppLogo } from '../../../public/icons/info-modal/AppLogo'
import Alience from '../../../public/images/info-modal/aliens.png'
import styles from './info-modal.module.css'

type InfoModalProps = {
	open: boolean
	title: string
	error?: boolean
	onClose: () => void
	description?: string
	actions?: React.ReactNode
}

export const InfoModal = (props: InfoModalProps) => {
	const { open, title, error, actions, description, onClose } = props

	return (
		<Modal open={open}>
			<div className={styles['info-modal']}>
				<button className={styles['close-button']} onClick={onClose}>
					<Close className='w-full h-full' />
				</button>
				<div className={styles['left-part']}>
					<div className={styles['left-part__container']}>
						<div className={styles['app-logo']}>
							<AppLogo />
						</div>
						<div>
							<h4 className={clsx(styles['left-part__title'], 'h4', error && 'text-error')}>
								{title}
							</h4>
							<span className={clsx(styles['left-part__description'], 'bodyText')}>
								{description}
							</span>
						</div>
						<div>{actions}</div>
					</div>
				</div>
				<div className={styles['right-part']}>
					<AnimatePresence initial={true}>
						{open && (
							<motion.div
								initial={{ translateX: -150, opacity: 0 }}
								animate={{ translateX: 0, opacity: 1 }}
								exit={{ translateX: -150, opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<Image src={Alience} alt='Alience' />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</Modal>
	)
}
