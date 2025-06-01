import { APP_LINKS_KEYS } from '@/consts/common'
import Link from 'next/link'
import { PlusIcon } from '../../../public/icons/common/PlusIcon'
import { Button } from '../UI/Button'
import { TableTabs } from './TableTabs'

export const TableSort = () => (
	<div className='relative w-full  w1150:min-w-[1080px] pb-[7px] border border-t-0 border-l-0 border-r-0 border-b-border bg-background px-[19.51px] flex justify-between items-end'>
		<TableTabs />
		<Link href={APP_LINKS_KEYS.addPurchase}>
			<Button
				className='max-w-[251px] min-h-[48px] rounded-[18px] flex justify-center items-center gap-[10px] w1350:hidden'
				variant='success'
			>
				<PlusIcon />
				Добавить покупку
			</Button>
		</Link>
	</div>
)
