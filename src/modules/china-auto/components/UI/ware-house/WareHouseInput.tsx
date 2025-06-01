import { CopyButton } from '@/components/UI/CopyButton'

type WareHouseInputProps = {
	field: string | number
	firstFieldName: string
	secondFieldName: string
}

export const WareHouseInput = ({ field, firstFieldName, secondFieldName }: WareHouseInputProps) => (
	<div className='flex w1150:flex-col w1050:flex-row w450:flex-col justify-between items-center w1150:items-start w1050:items-center w450:items-start gap-7 w1150:gap-1 w1050:gap-7 w450:gap-1'>
		<div>
			<p className='bodyText text-primary_text'>{secondFieldName}</p>
			<p className='inputLabel text-secondary_text'>{firstFieldName}</p>
		</div>
		{field && (
			<div className='flex justify-between items-center gap-1 w-full max-w-[327px] w1150:max-w-full w1050:max-w-[327px] w450:max-w-full px-[10px] py-[12px] rounded-[12px] bg-background border border-secondary'>
				<p className='bodyText text-primary_text'>{field}</p>
				<CopyButton textToCopy={field} />
			</div>
		)}
	</div>
)
