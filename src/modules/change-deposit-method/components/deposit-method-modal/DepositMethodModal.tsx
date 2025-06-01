import { Button } from '@/components/UI/Button'
import { Modal } from '@/components/UI/Modal'
import { DEPOSIT_METHODS } from '../../consts/depositMethods'
import { DepositMethodSelect } from '../deposit-method-select/DepositMethodSelect'

type DepositMethodModalProps = {
	open: boolean
	onClose: () => void
	selectedMethod: string
	onChange: (value: string) => void
}

export const DepositMethodModal = (props: DepositMethodModalProps) => {
	const { open, onClose, onChange, selectedMethod } = props

	return (
		<Modal open={open} onClose={onClose}>
			<div className='bg-white py-10 px-5 w-[528px] flex flex-col overflow-y-auto w950:w-[480px] w750:w-[430px] w650:w-[400px] w450:w-[333px] w370:w-[300px] max-h-[570px] h-screen rounded-2xl'>
				<h4 className='h4 mb-6 w650:mb-5 w450:mb-3'>Пополнить счет</h4>
				<DepositMethodSelect
					label='Выберите способ пополнения'
					onChange={onChange}
					options={DEPOSIT_METHODS}
					value={selectedMethod}
				/>
				<Button
					size='lg'
					className='max-w-[255px] mt-auto w750:py-4 w450:max-w-full w450:rounded-xl w450:py-3'
				>
					Сохранить
				</Button>
			</div>
		</Modal>
	)
}
