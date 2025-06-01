import { Button } from '@/components/UI/Button'
import { Link } from '@/components/UI/Link'
import { InfoModal } from '@/components/info-modal/InfoModal'

type ResetPasswordModalProps = { open: boolean; onClose: () => void }

export const ResetPasswordModal = ({ open, onClose }: ResetPasswordModalProps) => (
	<InfoModal
		onClose={onClose}
		open={open}
		title='Ваш пароль успешно изменен!'
		description='Изменение пароля завершено'
		actions={
			<>
				<Button className='mb-6 w420:mb-4' onClick={onClose}>
					Закрыть
				</Button>
				<Link href='/setting' className='border-primary border-[1px] text-info' variant='white'>
					Назад
				</Link>
			</>
		}
	/>
)
