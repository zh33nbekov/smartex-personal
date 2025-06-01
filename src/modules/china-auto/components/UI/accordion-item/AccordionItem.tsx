import { AccordionItemProps } from '@/modules/china-auto/type/accordionItem'
import clsx from 'clsx'

export const AccordionItem = ({
	address,
	setAddressIndex,
	index,
	addressIndex,
}: AccordionItemProps) => {
	const Icon = address.icon
	return (
		<div
			onClick={() => setAddressIndex(index)}
			className={clsx(
				'w-full flex w420:flex-col justify-between items-start gap-4 border border-border bg-background py-[16px] px-[20px] rounded-2xl cursor-pointer',
				{
					'border-secondary': addressIndex === index,
				}
			)}
		>
			{Icon && <Icon />}
			<div className='w-full flex flex-col items-start gap-2'>
				<h6 className='h6 text-primary_text'>{address.title}</h6>
				{address.summary && <p className='bodyText text-secondary_text'>{address.summary}</p>}
			</div>
		</div>
	)
}
