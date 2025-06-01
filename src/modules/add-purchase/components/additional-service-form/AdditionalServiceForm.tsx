'use client'

import { Button } from '@/components/UI/Button'
import { TextArea } from '@/components/UI/TextArea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Warning } from '../../../../../public/icons/common/Warning'
import { Box } from '../../consts/box'
import { additionalServiceSchema } from '../../schema/additionalService'
import { AdditionalServiceFormType } from '../../type/additionalServiceForm'
import { SelectDropdown } from '../select-dropdown/SelectDropdown'

export const AdditionalServiceForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<AdditionalServiceFormType>({
		resolver: zodResolver(additionalServiceSchema),
		defaultValues: {
			box: '',
			comment: '',
		},
	})

	const onSubmit = (data: AdditionalServiceFormType) => {
		console.log('VALID FORM DATA →', data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
			<div className='flex flex-col gap-1'>
				<Controller
					name='box'
					control={control}
					render={({ field }) => (
						<SelectDropdown
							mainLabel='Коробка'
							label='Выберите один из след варианта'
							variant='none'
							options={Box}
							{...field}
						/>
					)}
				/>
				{errors.box?.message && (
					<span className='uiInputLabel text-error h-[1.125rem] pointer-events-none'>
						{errors.box?.message}
					</span>
				)}
			</div>
			<div className='flex items-center gap-4 w450:items-start'>
				<Warning />
				<p className='inputLabel text-secondary_text'>Мы берем + 2 доллара на каждую коробку</p>
			</div>
			<Controller
				name='comment'
				control={control}
				render={({ field }) => (
					<TextArea
						resize
						label='Добавьте свой комментарий'
						placeholder='Комментарий'
						value={field.value}
						onChange={field.onChange}
						onBlur={field.onBlur}
						errorMessage={errors.comment?.message}
					/>
				)}
			/>
			<div className='flex items-center gap-4 w450:flex-col'>
				<Button
					variant='success'
					className='h-[40px] flex justify-center items-center w-[179px] w450:w-full w450:h-full'
					type='button'
				>
					Добавить заметки
				</Button>
				<Button
					variant='error'
					className='h-[40px] flex justify-center items-center w-[102px] w450:w-full w450:h-full'
					type='button'
				>
					Удалить
				</Button>
			</div>
		</form>
	)
}
