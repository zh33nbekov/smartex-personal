import { BalanceWidget } from '../balance-widget/BalanceWidget'
import { BonusWidget } from '../bonus-widget/BonusWidget'
import { OrdersWidget } from '../orders-widget/OrdersWidget'
import { PickupPointWidget } from '../pickup-point-widget/PickupPointWidget'
import styles from './profile-widgets.module.css'

export const ProfileWidgets: React.FC = () => (
	<section className={styles['profile-widgets']}>
		<PickupPointWidget />
		<OrdersWidget />
		<BalanceWidget />
		<BonusWidget />
	</section>
)
