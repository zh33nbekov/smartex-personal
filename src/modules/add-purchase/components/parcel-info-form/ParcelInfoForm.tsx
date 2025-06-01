'use client'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { CATEGORY } from '../../consts/categories'
import { Countries } from '../../consts/countries'
import { parcelSchema } from '../../schema/parcelInfoSchema'
import { ParcelForm } from '../../type/parcelForm'
import { SelectDropdown } from '../select-dropdown/SelectDropdown'

export const ParcelInfoForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ParcelForm>({
		resolver: zodResolver(parcelSchema),
		defaultValues: {
			category: '',
			track: '',
			country: '',
			price: 0,
			quantity: 1,
		},
	})

	const onSubmit = (data: ParcelForm) => {
		console.log('VALID FORM DATA →', data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
			<div className='flex flex-col gap-1'>
				<Controller
					name='category'
					control={control}
					render={({ field }) => (
						<SelectDropdown
							mainLabel='Категория'
							label='Выберите категорию товара'
							variant='none'
							options={CATEGORY}
							{...field}
						/>
					)}
				/>
				{errors.category?.message && (
					<span className='uiInputLabel text-error h-[1.125rem] pointer-events-none'>
						{errors.category?.message}
					</span>
				)}
			</div>
			<Controller
				name='track'
				control={control}
				render={({ field }) => (
					<Input
						label='Трек номер'
						placeholder='0000000000000'
						{...field}
						errorMessage={errors.track?.message}
					/>
				)}
			/>
			<div className='flex flex-col gap-1'>
				<Controller
					name='country'
					control={control}
					render={({ field }) => (
						<SelectDropdown
							mainLabel='Откуда'
							label='Выберите страну отправления'
							variant='radio'
							options={Countries}
							{...field}
						/>
					)}
				/>
				{errors.country?.message && (
					<span className='uiInputLabel text-error h-[1.125rem] pointer-events-none'>
						{errors.country?.message}
					</span>
				)}
			</div>
			<div className='flex items-center gap-5 w450:flex-col'>
				<Controller
					name='price'
					control={control}
					render={({ field }) => (
						<Input
							type='number'
							label='Цена'
							placeholder='Введите цену'
							{...field}
							errorMessage={errors.price?.message}
							className='bg-white'
						/>
					)}
				/>

				<Controller
					name='quantity'
					control={control}
					render={({ field }) => (
						<Input
							type='number'
							label='Количество'
							placeholder='Введите количество'
							{...field}
							errorMessage={errors.quantity?.message}
							className='bg-white'
						/>
					)}
				/>
			</div>
			<div className='flex mt-16 gap-[18px] w450:flex-col'>
				<Button type='button' className='h-[60px]'>
					Добавить покупку
				</Button>
				<Button type='button' className='h-[60px]' variant='error'>
					Отменить
				</Button>
			</div>
		</form>
	)
}
