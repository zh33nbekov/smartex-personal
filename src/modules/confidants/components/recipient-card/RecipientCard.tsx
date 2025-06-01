import { TrashBin } from '../../../../../public/icons/common/TrashBin'
import { PersonAvatar } from '../../assets/icons/PersonAvatar'

export const RecipientCard = () => (
	<div className='w-full flex w420:flex-col justify-between items-start gap-4 border border-border bg-background py-[20px] px-[20px] rounded-2xl'>
		<div className='w-[40px] h-[40px] min-w-[40px] bg-secondary flex justify-center items-center rounded-full'>
			<PersonAvatar />
		</div>
		<div className='w-full'>
			<div className='flex justify-between items-start gap-2'>
				<h6 className='h6 text-primary_text'>Основной получатель</h6>
				<div className='px-[10px] py-[5px] bg-success supportBadge text-white rounded-[4px]'>
					Главный
				</div>
			</div>
			<div className='flex justify-between items-end mt-2 gap-4'>
				<ul>
					<li className='bodyText text-secondary_text'>Иванов Иван.</li>
					<li className='bodyText text-secondary_text'>+996 555 123 456.</li>
					<li className='bodyText text-secondary_text'>г. Бишкек, ул. Ленина, 12</li>
				</ul>
				<button className='text-icons'>
					<TrashBin />
				</button>
			</div>
		</div>
	</div>
)
