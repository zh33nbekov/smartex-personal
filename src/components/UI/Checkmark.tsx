import { AnimatePresence, motion } from 'framer-motion'

type CheckmarkProps = {
	active: boolean
	className: string
}

export const Checkmark = ({ active, className }: CheckmarkProps) => (
	<motion.div
		initial={false}
		animate={{
			backgroundColor: active ? '#1976d2' : '#FFF',
			borderColor: active ? '#1976d2' : '#D1D5DB',
		}}
		transition={{ duration: 0.4 }}
		className={className}
	>
		<AnimatePresence mode='wait'>
			{active && (
				<motion.svg
					key='checkmark'
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<motion.path
						d='M3.33398 8.00008L6.66732 11.3334L13.334 4.66675'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						exit={{ pathLength: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					/>
				</motion.svg>
			)}
		</AnimatePresence>
	</motion.div>
)
