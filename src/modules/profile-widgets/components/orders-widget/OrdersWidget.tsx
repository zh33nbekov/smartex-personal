import { APP_LINKS_KEYS } from '@/consts/common'
import Order from '../../assets/order.png'
import { WidgetBase } from '../widget-base/WidgetBase'
import { WidgetLink } from '../widget-link/WidgetLink'

export const OrdersWidget = () => (
	<WidgetBase
		image={Order}
		alt='Ваши заказы'
		title='Ваши заказы'
		summary='145'
		action={<WidgetLink href={APP_LINKS_KEYS.home}>Посмотреть</WidgetLink>}
	/>
)
