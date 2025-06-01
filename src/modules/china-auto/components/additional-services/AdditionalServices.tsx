import { Checkbox } from '@/components/UI/Checkbox'
import { useState } from 'react'
import { STORED_PACKAGES } from '../../consts/storedPackages'

export const AdditionalServices = () => {
	const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target
		setCheckedItems((prev) => ({
			...prev,
			[name]: checked,
		}))
	}

	// const selectedPackages = Object.entries(checkedItems)
	// 	.filter(([, isChecked]) => isChecked)
	// 	.map(([key]) => key)

	// console.log(selectedPackages, 'selectedPackages')

	return (
		<div className='w-full flex flex-col items-start gap-4'>
			{STORED_PACKAGES.map((pack, index) => (
				<div
					key={index}
					className='w-full py-[16px] pl-[24px] pr-[10px] border border-border rounded-[12px] flex justify-between items-center gap-4'
				>
					<Checkbox
						name={pack.title}
						checked={checkedItems[pack.title] || false}
						onChange={handleChange}
					/>
					<p className='bodyText text-primary_text'>{pack.title}</p>
				</div>
			))}
			<p className='bodyText text-secondary_text mt-2'>
				Настройте параметры упаковки перед отправкой, чтобы <br /> посылка дошла в идеальном
				состоянии!
			</p>
		</div>
	)
}
