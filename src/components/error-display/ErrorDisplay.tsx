import Image from 'next/image'
import ErrorDisplayImg from '../../../public/images/error-display/error-display.png'
import { Button } from '../UI/Button'

type ErrorDisplayProps = {
	title?: string
	description?: string
	action?: React.ReactNode
}

export const ErrorDisplay = ({ title, description, action }: ErrorDisplayProps) => {
	const errorMessage = title || 'Что-то пошло не так'
	const errorDescription = description || 'Что-то пошло не так'

	return (
		<div className='flex items-center flex-col justify-center py-[120px] '>
			<Image
				className='w-[169px] h-[315px] object-contain'
				src={ErrorDisplayImg}
				width={169}
				height={315}
				alt='ErrorDisplay'
			/>
			<h2 className='h2'>{errorMessage}</h2>
			<p className='bodyText pt-3 pb-[18px] max-w-[610px] text-center'>{errorDescription}</p>
			{action || (
				<Button className='max-w-[488px] w750:py-4 w550:rounded-xl' size='lg'>
					Обновить страницу
				</Button>
			)}
		</div>
	)
}
