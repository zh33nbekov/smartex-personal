'use client'

import { Modal } from '@/components/UI/Modal'
import { Close } from '../../../../../../public/icons/common/Close'

type TermsDeliveryModalProps = {
	open: boolean
	onClose: () => void
}

export const TermsDeliveryModal = ({ open, onClose }: TermsDeliveryModalProps) => (
	<Modal open={open} onClose={onClose}>
		<div className='max-w-[528px] min-w-[320px] max-h-[610px] h-screen overflow-y-auto pt-[4.5rem] pb-10 pl-8 pr-5 bg-white rounded-2xl w850:pt-10 w850:pl-5 w550:py-5'>
			<button
				onClick={onClose}
				className='absolute top-6 right-5 w-8 h-8 bg-icons rounded-full w850:hidden'
			>
				<Close className='w-full h-full text-white' />
			</button>
			<h4 className='h4 mb-3'>Бесплатная доставка от SMARTEX</h4>
			<p className='bodyText text-secondary_text'>
				Мы ценим наших клиентов и предлагаем бесплатную доставку при выполнении определённых
				условий! Теперь делать покупки за границей стало ещё выгоднее.
			</p>
			<ul className='my-5'>
				<p className='bodyText text-secondary_text pb-2'>Условия бесплатной доставки:</p>
				<li>
					✅ Минимальная сумма заказа – оформите заказ на сумму от X у.е. и получите бесплатную
					доставку.
				</li>
				<li>
					✅ Объединение посылок – при отправке нескольких заказов одним отправлением от Y кг.
				</li>
				<li>
					✅ Специальные акции – следите за нашими предложениями и получайте бесплатную
					доставку по промокодам.
				</li>
			</ul>
			<ul>
				<p className='bodyText text-secondary_text pb-2'>Как воспользоваться?</p>
				<li>Оформите заказ в зарубежном интернет-магазине.</li>
				<li>Используйте наш склад в качестве адреса доставки.</li>
				<li>Выполните условия акции – и мы отправим вашу посылку бесплатно!</li>
			</ul>
			<p className='bodyText text-secondary_text'>
				📦 SMARTEX – доставка без границ и без лишних затрат! Если нужно уточнить условия,
				просто сообщи! 😊
			</p>
		</div>
	</Modal>
)
