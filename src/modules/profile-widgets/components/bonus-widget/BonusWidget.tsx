import { APP_LINKS_KEYS } from '@/consts/common'
import Bonus from '../../assets/bonus.png'
import { WidgetBase } from '../widget-base/WidgetBase'
import { WidgetLink } from '../widget-link/WidgetLink'

export const BonusWidget = () => (
	<WidgetBase
		image={Bonus}
		alt='Ваш бонус'
		summary='145'
		title='Ваш бонус'
		action={<WidgetLink href={APP_LINKS_KEYS.home}>Использовать</WidgetLink>}
	/>
)
