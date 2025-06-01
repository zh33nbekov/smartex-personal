import { PaymentType } from '@proto/proto/service'

const TYPES = [
	{ label: 'Все', value: PaymentType.ALL },
	{ label: 'Пополнение', value: PaymentType.REPLENISH },
	{ label: 'Списание', value: PaymentType.CHARGE },
	{ label: 'Другое', value: PaymentType.OTHER },
]

interface Props {
	current: PaymentType
	onChange: (type: PaymentType) => void
}

export const TransactionFilter = ({ current, onChange }: Props) => (
	<div className='flex gap-4 mt-5 mb-2 py-3 px-2 border-b border-border bg-white rounded-t-xl w750:ml-0'>
		{TYPES.map(({ label, value }) => (
			<button
				key={value}
				onClick={() => onChange(value)}
				className={`h6 text-nowrap transition border-b ${
					current === value
						? 'text-secondary border-secondary'
						: 'text-secondary_text border-transparent hover:border-secondary hover:text-secondary'
				}`}
			>
				{label}
			</button>
		))}
	</div>
)
