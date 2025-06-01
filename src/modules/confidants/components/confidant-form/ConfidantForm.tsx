'use client'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { DragAndDrop } from '@/modules/confidants/assets/icons/DragAndDrop'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Controller, useForm } from 'react-hook-form'
import { CONFIDANT_FORM_FIELDS } from '../../consts/confidantFormField'
import { ConfidantFormSchema } from '../../types/confidantFormSchema'
import { confidantFormSchema } from '../../utils/confidantFormSchema'

const ConfidantForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ConfidantFormSchema>({
		mode: 'onSubmit',
		resolver: zodResolver(confidantFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			pin: '',
			phoneNumber: '',
			passportBack: undefined,
			passportFront: undefined,
		},
	})

	const submitHandler = (data: ConfidantFormSchema) => {
		alert('Успешно отправлено!!!')
		console.log(data)
	}

	return (
		<motion.div
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: 'auto', opacity: 1 }}
			exit={{ height: 0, opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<form onSubmit={handleSubmit(submitHandler)}>
				<div className='mb-6'>
					<h4 className='h4 text-primary_text'>Доверенное лицо</h4>
					<p className='botyText text-secondary_text mt-[12px]'>
						<b className='text-error'>Важно:</b> Пожалуйста, вводите данные получателя в
						точности так, как они указаны в его удостоверяющем документе (паспорт, ID-карта и
						т.д.). Если информация не совпадет с документом, получение посылки может быть
						отклонено. Убедитесь, что имя, контактный телефон и адрес введены корректно.
					</p>
				</div>
				{CONFIDANT_FORM_FIELDS.map((field) => (
					<div key={field.name} className='mt-4'>
						<Controller
							name={field.name}
							control={control}
							render={({ field: controllerField }) => (
								<Input
									autoComplete='on'
									type={field.type}
									label={field.label}
									{...controllerField}
									placeholder={field.placeholder}
									errorMessage={errors[field.name]?.message}
								/>
							)}
						/>
					</div>
				))}
				<div className='mt-4'>
					<Controller
						name='passportFront'
						control={control}
						rules={{ required: 'Загрузите файл' }}
						render={({ field: { onChange }, fieldState: { error } }) => (
							<div>
								<DragAndDrop
									label='Добавить лицевую сторону паспорта'
									onFileAccepted={(file) => onChange(file)}
								/>
								{error && (
									<p className='uiInputLabel text-error h-[1.125rem] pointer-events-none'>
										{error.message}
									</p>
								)}
							</div>
						)}
					/>
				</div>
				<div className='mt-4'>
					<Controller
						name='passportBack'
						control={control}
						rules={{ required: 'Загрузите файл' }}
						render={({ field: { onChange }, fieldState: { error } }) => (
							<div>
								<DragAndDrop
									label='Добавить обратную сторону паспорта'
									onFileAccepted={(file) => onChange(file)}
								/>
								{error && (
									<p className='uiInputLabel text-error h-[1.125rem] pointer-events-none'>
										{error.message}
									</p>
								)}
							</div>
						)}
					/>
				</div>
				<Button type='submit' variant='primary' className='mt-6'>
					Отправить
				</Button>
			</form>
		</motion.div>
	)
}

export default ConfidantForm
