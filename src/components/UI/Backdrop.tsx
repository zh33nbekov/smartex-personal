import clsx from 'clsx'

type BackdropProps = {
	open: boolean
	onClose?: () => void
}

export const Backdrop = ({ open, onClose }: BackdropProps) => (
	<div
		onClick={onClose}
		className={clsx(
			'fixed w-full z-40 h-full top-0 left-0 bg-[#1111119d] transition-opacity-visibility duration-300 ease-in-out',
			open ? 'opacity-1 visible' : 'opacity-0 invisible'
		)}
	/>
)
