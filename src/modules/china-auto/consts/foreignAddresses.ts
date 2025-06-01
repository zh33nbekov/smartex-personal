import { HomeIcon } from '../assets/icons/HomeIcon'
import { Hour } from '../assets/icons/Hour'
import { Note } from '../assets/icons/Note'
import { Present } from '../assets/icons/Present'
import { ProhibitionIcon } from '../assets/icons/Prohibition'
import { AdditionalServices } from '../components/additional-services/AdditionalServices'
import { FillingExample } from '../components/filling-example/FillingExample'
import ProhibitedGoods from '../components/prohibited-goods/ProhibitedGoods'
import { WareHouseForm } from '../components/ware-house-form/WareHouseForm'
import { WorkingDays } from '../components/working-days/WorkingDays'
import { ForeignAddress } from '../type/foreignAddress'

export const FOREIGN_ADDRESSES: ForeignAddress[] = [
	{
		title: 'Адрес склада',
		summary: 'Войдите, чтобы скопировать адрес',
		contentTitle: 'Зарубежные адреса складов для удобного получения посылок',
		icon: HomeIcon,
		content: WareHouseForm,
	},
	{
		title: 'Примеры заполнения',
		summary: 'Пошаговая инструкция по заполнению и список доступных магазинов',
		contentTitle: 'Пожалуйста, ознакомьтесь с инструкцией перед заполнением',
		icon: Note,
		content: FillingExample,
	},
	{
		title: 'Запрещённые товары',
		summary: 'Ознакомьтесь с перечнем запрещённых товаров перед отправкой',
		contentTitle: 'Запрещённые товары',
		icon: ProhibitionIcon,
		content: ProhibitedGoods,
	},
	{
		title: 'Рабочие дни',
		summary: 'График работы склада',
		contentTitle: 'График работы склада',
		icon: Hour,
		content: WorkingDays,
		subtitle: 'Планируйте свои отправки с учетом рабочего времени и праздников',
	},
	{
		title: 'Сохранение упаковки',
		summary: 'Мы предлагаем спектр дополнительных услуг для удобства',
		contentTitle: 'Сохранение упаковки',
		icon: Present,
		content: AdditionalServices,
		subtitle: 'Вы можете выбрать один из вариантов сохранения оригинальной упаковки',
	},
]
