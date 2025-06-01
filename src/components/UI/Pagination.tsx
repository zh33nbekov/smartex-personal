import { getPageRange } from '@/utils/pagination'
import clsx from 'clsx'
import { IconLeft } from '../../../public/icons/pagination/IconLeft'
import { IconRight } from '../../../public/icons/pagination/IconRight'

type PaginationProps = {
	className?: string
	totalPages: number
	currentPage: number
	onPageChange: (page: number) => void
}

export const Pagination = (props: PaginationProps) => {
	const { className, currentPage, totalPages, onPageChange } = props

	const range = getPageRange(currentPage, totalPages)
	const handlePageChange = (page: string | number) => {
		if (typeof page === 'number') {
			onPageChange(page)
		}
	}

	return (
		<div
			className={clsx(
				'flex w-full items-center justify-center mx-auto overflow-x-auto',
				className
			)}
		>
			<button
				onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
				className={clsx(
					'flex items-center justify-center gap-2 text-[14px] leading-[17px] font-normal font-lato text-secondary_text mr-2 py-[10px] px-[7px] rounded-lg hover:bg-background_hover w750:w-[39px] h-[39px] w450:flex-shrink-0 w450:w-[33px] w450:h-[33px]',
					currentPage === 1 && 'cursor-not-allowed'
				)}
			>
				<IconLeft />
				<span className='w750:hidden'>Предыдущий</span>
			</button>
			{range.map((page, idx) => (
				<button
					key={idx}
					onClick={() => handlePageChange(page)}
					className={clsx(
						'flex items-center justify-center w-[39px] h-[39px] mx-1 py-[.5625rem] flex-shrink-0 px-2 rounded-md text-sm w450:w-[33px] w450:h-[33px] w450:mx-[1px]',
						page === currentPage
							? 'bg-secondary text-primary_text font-bold text-[15px]'
							: 'text-secondary_text text-[14px]',
						page !== currentPage && 'hover:bg-background_hover'
					)}
				>
					{page}
				</button>
			))}
			<button
				onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
				className={clsx(
					'flex items-center justify-center gap-2 text-[14px] leading-[17px] font-normal font-lato text-secondary_text ml-2 py-[10px] px-[7px] rounded-lg hover:bg-background_hover w750:w-[39px] h-[39px] w450:flex-shrink-0 w450:w-[33px] w450:h-[33px]',
					currentPage === totalPages && 'cursor-not-allowed'
				)}
			>
				<span className='w750:hidden'>Следующий</span>
				<IconRight />
			</button>
		</div>
	)
}
