import { TableTabsType } from '@/types/tableTabs'

export const TABLE_TABS: TableTabsType[] = [
	{
		title: 'Все',
	},
	{
		title: 'В процессе',
	},
	{
		title: 'На складе',
	},
	{
		title: 'В пути',
	},
	{
		title: 'Сортировка',
		children: [
			{
				title: 'Status',
			},
			{
				title: 'Status',
			},
			{
				title: 'Status',
			},
			{
				title: 'Status',
			},
		],
	},
	{
		title: 'Все статусы',
		children: [
			{
				title: 'Status',
			},
			{
				title: 'Status',
			},
			{
				title: 'Status',
			},
			{
				title: 'Status',
			},
		],
	},
] as const
