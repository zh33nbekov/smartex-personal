import { RecipientCard } from '../recipient-card/RecipientCard'

export const Recipients = () => (
	<div className='w-[528px] w650:w-full bg-white px-[20px] pt-[24px] pb-[40px] rounded-2xl'>
		<h4 className='h4 text-primary_text'>Получатели</h4>
		<div className='mt-3 flex flex-col items-center gap-2'>
			<RecipientCard />
			<RecipientCard />
		</div>
	</div>
)
