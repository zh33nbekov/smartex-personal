import { APP_LINKS_KEYS } from '@/consts/common'
import Balance from '../../assets/balance.png'
import { WidgetBase } from '../widget-base/WidgetBase'
import { WidgetLink } from '../widget-link/WidgetLink'

export const BalanceWidget = () => (
	<WidgetBase
		image={Balance}
		alt='Ваш баланс'
		summary='145 с 00 т'
		title='Ваш баланс'
		action={<WidgetLink href={APP_LINKS_KEYS.topUp}>Пополнить</WidgetLink>}
	/>
)
