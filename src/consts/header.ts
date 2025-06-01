import { HeaderLink } from '@/types/header'
import { Message, Notification, Setting } from '../../public/icons/header'
import { APP_LINKS_KEYS } from './common'

export const HEADER_LINKS: HeaderLink[] = [
	{
		'data-count': 1,
		id: 'message',
		icon: Message,
		label: 'Сообщение',
		path: APP_LINKS_KEYS.message,
	},
	{
		id: 'notification',
		icon: Notification,
		path: APP_LINKS_KEYS.notification,
		'data-count': 9,
		label: '/Уведомление',
	},
	{
		id: 'setting',
		icon: Setting,
		'data-count': 10,
		path: APP_LINKS_KEYS.setting,
		label: 'Настройки',
	},
] as const
