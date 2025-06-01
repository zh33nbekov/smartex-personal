import { Button } from '@/components/UI/Button'
import { TextArea } from '@/components/UI/TextArea'

export const AddComment = () => (
	<div className='px-5 pb-6'>
		<p className='pb-2'>
			Клиенты часто путают свои товары по трек-коду. В этом поле можно оставить заметку, чтобы
			избежать ошибок.
		</p>
		<TextArea placeholder='Заметка для себя' resize className='rounded-xl' />
		<div className='flex max-w-[217px] gap-4 mt-4'>
			<Button variant='success' size='sm'>
				Сохранить
			</Button>
			<Button variant='error' size='sm'>
				Удалить
			</Button>
		</div>
	</div>
)
