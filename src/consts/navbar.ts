import { NavbarLink } from '@/types/navbar'
import { FAQ } from '../../public/icons/navbar/FAQ'
import { ForeignAddresses } from '../../public/icons/navbar/ForeignAddresses'
import { HomeDelivery } from '../../public/icons/navbar/HomeDelivery'
import { MyParcel } from '../../public/icons/navbar/MyParcel'
import { PersonalAccount } from '../../public/icons/navbar/PersonalAccount'
import { PersonalInfo } from '../../public/icons/navbar/PersonalInfo'
import { TrustedPersons } from '../../public/icons/navbar/TrustedPersons'
import { APP_LINKS_KEYS } from './common'

export const NAVBAR_LINKS: NavbarLink[] = [
	{
		path: APP_LINKS_KEYS.home,
		icon: PersonalAccount,
		label: 'Личный кабинет',
	},
	{
		path: APP_LINKS_KEYS.personalInfo,
		icon: PersonalInfo,
		label: 'Личная информация',
	},
	{
		icon: MyParcel,
		label: 'Мои посылки',
		children: [
			{ path: APP_LINKS_KEYS.chinaAutoParcel, label: 'Китай (авто)' },
			{ path: APP_LINKS_KEYS.chinaAviaParcel, label: 'Китай (авиа)' },
			{ path: APP_LINKS_KEYS.usaParcel, label: 'США' },
			{ path: APP_LINKS_KEYS.turkishParcel, label: 'Турция' },
		],
	},
	{
		icon: ForeignAddresses,
		label: 'Зарубежные адреса',
		children: [
			{ path: APP_LINKS_KEYS.chinaAutoForeignAddress, label: 'Китай (авто)' },
			{ path: APP_LINKS_KEYS.chinaAviaForeignAddress, label: 'Китай (авиа)' },
			{ path: APP_LINKS_KEYS.usaForeignAddress, label: 'США' },
			{ path: APP_LINKS_KEYS.turkishForeignAddress, label: 'Турция' },
		],
	},
	{
		path: APP_LINKS_KEYS.homeDelivery,
		icon: HomeDelivery,
		label: 'Доставка до дома',
	},
	{
		path: APP_LINKS_KEYS.confidants,
		icon: TrustedPersons,
		label: 'Доверенные лица',
	},
	{
		path: APP_LINKS_KEYS.faq,
		icon: FAQ,
		label: 'FAQ',
	},
] as const
