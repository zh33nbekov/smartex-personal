'use client'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { TextArea } from '@/components/UI/TextArea'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { FAQ_FORM_FIELDS } from '../../consts/faqFormFields'
import { FaqFormSchema } from '../../types/faqFormSchema'
import { faqFormSchema } from '../../utils/faqFormValidation'
import styles from './faq-form.module.css'

export const FaqForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FaqFormSchema>({
		mode: 'onSubmit',
		resolver: zodResolver(faqFormSchema),
	})

	const submitHandler = (data: FaqFormSchema) => {
		if (data) {
			alert('Успешно отправлено!!!')
		}
	}

	return (
		<form className={styles['faq-form']} onSubmit={handleSubmit(submitHandler)}>
			<h4 className={clsx(styles['faq-form__title'], 'h4')}>Остались вопросы? Напишите нам!</h4>
			{FAQ_FORM_FIELDS.map((field) => (
				<div key={field.name} className={styles['faq-form__fields']}>
					<Input
						autoComplete='on'
						type={field.type}
						label={field.label}
						{...register(field.name)}
						placeholder={field.placeholder}
						errorMessage={errors[field.name]?.message}
					/>
				</div>
			))}
			<TextArea
				resize
				label='Сообщение'
				{...register('message')}
				placeholder='Написать сообщение'
				errorMessage={errors['message']?.message}
			/>
			<Button type='submit' size='lg' className='mt-12'>
				Отправить
			</Button>
		</form>
	)
}
