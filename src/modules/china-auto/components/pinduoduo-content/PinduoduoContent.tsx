import Image from 'next/image'
import PinduoduoPhone from '../../assets/images/pinduoduo-phone.png'

export const PinduoduoContent = () => {
	console.log()

	return (
		<div className='relative w-full flex w1250:flex-col w1050:flex-row w550:flex-col items-center border border-secondary py-[15px] px-[20px] rounded-2xl gap-[15px]'>
			<div className='flex flex-col gap-5 float-right'>
				<p className='bodySmall text-secondary_text'>
					Pinduoduo — популярный китайский маркетплейс, предлагающий широкий ассортимент
					товаров, включая одежду, аксессуары и электронику.
				</p>
				<p className='bodySmall text-secondary_text'>📖 Как правильно заполнить адрес?</p>
				<p className='bodySmall text-secondary_text'>📱 Пример заполнения на телефоне:</p>
				<p className='bodySmall text-secondary_text'>
					На изображении представлена форма ввода адреса для заказов с Pinduoduo. Используйте
					этот образец для корректного оформления доставки.
				</p>
				<p className='bodySmall text-secondary_text'>
					✉ Если у вас возникли вопросы, обратитесь в поддержку! 🚀
				</p>
			</div>
			<div className='min-w-[190px] w1250:max-w-[190px] h-[388px]'>
				<Image
					src={PinduoduoPhone}
					alt='pinduoduo-content-phone'
					width={190}
					height={388}
					className='w-full h-full'
				/>
			</div>
		</div>
	)
}
