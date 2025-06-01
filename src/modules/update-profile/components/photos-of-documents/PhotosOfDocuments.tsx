import Image from 'next/image'
import Back from '../../assets/back.png'
import Front from '../../assets/front.png'

type PhotosOfDocumentsProps = {
	frontSide: string
	reverseSide: string
}

export const PhotosOfDocuments = ({ frontSide, reverseSide }: PhotosOfDocumentsProps) => (
	<div className='max-w-[528px] w1050:max-w-full w-full flex flex-col gap-2'>
		<div className='w-full bg-white pt-6 px-5 pb-10 rounded-2xl'>
			<h4 className='h4 mb-6'>Лицевая сторона паспорта</h4>
			<div className='mx-auto max-w-[325px] max-h-[205px]'>
				<Image
					priority
					width={325}
					height={205}
					src={frontSide || Front}
					alt='Лицевая сторона паспорта'
					className='object-cover rounded-lg'
				/>
			</div>
		</div>
		<div className='w-full bg-white pt-6 px-5 pb-10 rounded-2xl'>
			<h4 className='h4 mb-6'>Обратная сторона паспорта</h4>
			<div className='mx-auto max-w-[325px] max-h-[205px]'>
				<Image
					priority
					width={325}
					height={205}
					src={reverseSide || Back}
					alt='Лицевая сторона паспорта'
					className='object-cover rounded-lg'
				/>
			</div>
		</div>
	</div>
)
