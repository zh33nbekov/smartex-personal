import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Caret } from '../../../public/icons/common/Caret'

type Section = {
	title: string
	content: string
}

type AccordeonProps = {
	sections: Section[]
	active: number | null
	onToggle: (index: number) => void
}

export const Accordeon = ({ active, sections, onToggle }: AccordeonProps) => (
	<>
		{sections.map((section, index) => {
			const isOpen = index === active

			return (
				<div key={index} className='mb-4'>
					<div
						className={clsx(
							'p-5 border border-border rounded-t-xl flex items-center justify-between cursor-pointer bg-background select-none transition-all',
							isOpen ? 'rounded-b-none' : 'rounded-b-xl'
						)}
						onClick={() => onToggle(index)}
					>
						<p className='bodyLarge'>{section.title}</p>
						<Caret
							className={clsx(
								'transition duration-300 text-icons',
								isOpen ? 'rotate-90' : 'rotate-0'
							)}
						/>
					</div>
					<AnimatePresence initial={false}>
						{isOpen && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className='bg-background border border-border border-t-0 rounded-b-xl px-5 overflow-hidden'
							>
								<div className='bodyText text-secondary_text' style={{ padding: '10px 0' }}>
									{section.content}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			)
		})}
	</>
)
