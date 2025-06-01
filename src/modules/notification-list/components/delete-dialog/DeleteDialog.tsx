'use client'

import { InfoModal } from '@/components/info-modal/InfoModal'
import { Button } from '@/components/UI/Button'

type DeleteDialogProps = {
	open: boolean
	onClose: () => void
}

export const DeleteDialog = ({ open, onClose }: DeleteDialogProps) => (
	<InfoModal
		open={open}
		title='Удаление сообщений'
		description='Вы действительно хотите удалить все сообщения?'
		onClose={onClose}
		actions={
			<>
				<Button variant='error' className='mb-6'>
					Удалить
				</Button>
				<Button onClick={onClose} variant='white' className='text-info'>
					Отмена
				</Button>
			</>
		}
	/>
)
