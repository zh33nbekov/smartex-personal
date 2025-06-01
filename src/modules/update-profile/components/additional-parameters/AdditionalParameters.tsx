import { Select } from '@/components/UI/Select'

const PICK_UP_POINTS = [
	{ label: 'г.Бишкек ул.Шопокова 140', value: 'г.Бишкек ул.Шопокова 140' },
	{ label: 'г.Бишкек ул.Шопокова 141', value: 'г.Бишкек ул.Шопокова 141' },
]
const STREETS = [
	{ label: 'Ул. Ленинская 123', value: 'Ул. Ленинская 123' },
	{ label: 'Ул. Ленинская 124', value: 'Ул. Ленинская 124' },
	{ label: 'Ул. Ленинская 125', value: 'Ул. Ленинская 125' },
]

export const AdditionalParameters = () => (
	<div>
		<Select className='my-2' onChange={() => {}} options={PICK_UP_POINTS} label='Выберите ПВЗ' />
		<Select onChange={() => {}} options={STREETS} label='Бишкек' />
	</div>
)
