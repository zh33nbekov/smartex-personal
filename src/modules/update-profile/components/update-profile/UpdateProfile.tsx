'use client'

import { Button } from '@/components/UI/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { UpdateProfileSchema } from '../../types/updateProfileSchema'
import { updateProfileSchema } from '../../utils/updateProfileValidation'
import { AdditionalParameters } from '../additional-parameters/AdditionalParameters'
import { Address } from '../address/Address'
import { ImageUpload } from '../image-upload/ImageUpload'
import { Initials } from '../initials/Initials'
import { PhotosOfDocuments } from '../photos-of-documents/PhotosOfDocuments'

export const UpdateProfile: React.FC = () => {
	const [files, setFiles] = useState({
		frontSide: '',
		reverseSide: '',
	})
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdateProfileSchema>({
		mode: 'onSubmit',
		resolver: zodResolver(updateProfileSchema),
	})
	const handleFetchFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				if (files.frontSide && files.reverseSide) return
				if (!files.frontSide) {
					setFiles((prev) => ({ ...prev, frontSide: reader.result as string }))
				} else {
					setFiles((prev) => ({ ...prev, reverseSide: reader.result as string }))
				}
			}
			reader.readAsDataURL(file)
		}
	}

	const handleClearFiles = () => {
		setFiles((prev) => ({ ...prev, frontSide: '', reverseSide: '' }))
	}

	const submitHandler = (data: UpdateProfileSchema) => {
		console.log(data)
	}

	return (
		<section>
			<form
				id='update-profile'
				className='w-full flex flex-col gap-6'
				onSubmit={handleSubmit(submitHandler)}
			>
				<div className='flex gap-6 w1050:flex-col'>
					<div className='w-1/2 w1050:w-full bg-white pt-6 px-5 pb-10 rounded-2xl w420:pt-4 w420:px-4 w420:pb-7'>
						<h4 className='h4 mb-6'>Редактировать профиль</h4>
						<ImageUpload onFetchFile={handleFetchFile} onClearFiles={handleClearFiles} />
						<Initials errors={errors} register={register} />
						<AdditionalParameters />
					</div>
					<PhotosOfDocuments frontSide={files.frontSide} reverseSide={files.reverseSide} />
				</div>
				<Address />
			</form>
			<div className='flex gap-6 max-w-[528px] mt-6 mb-[81px] w420:flex-col w420:gap-3'>
				<Button
					size='lg'
					type='submit'
					form='update-profile'
					className='w750:py-4 w420:py-3 w420:rounded-xl'
				>
					Сохранить изменения
				</Button>
				<Button
					variant='white'
					size='lg'
					className='hover:border-error text-secondary_text w750:py-4 w420:py-3 w420:rounded-xl'
				>
					Отменить
				</Button>
			</div>
		</section>
	)
}
