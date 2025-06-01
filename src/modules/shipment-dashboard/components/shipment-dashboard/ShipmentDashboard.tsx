'use client'

import clsx from 'clsx'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { Details } from '../../../../../public/icons/common/Details'
import styles from './shipment-dashboard.module.css'

type StatusData = {
	name: string
	value: number
	color: string
}

type CountryData = {
	name: string
	value: number
	color: string
	weight: number
}

// Данные для статусов посылок
const statusData: StatusData[] = [
	{ name: 'Получено', value: 12, color: '#6BBE66' },
	{ name: 'В пути', value: 22, color: '#4B89DC' },
	{ name: 'Готов к выдаче', value: 1, color: '#555555' },
	{ name: 'В пути до ПВЗ', value: 12, color: '#E74C3C' },
	{ name: 'Готов к выдаче', value: 7, color: '#222222' },
	{ name: 'На складе', value: 7, color: '#F39C12' },
]

// Данные для стран
const countryData: CountryData[] = [
	{ name: 'Китай авиа', value: 12, color: '#6BBE66', weight: 12 },
	{ name: 'Китай авто', value: 22, color: '#4B89DC', weight: 22 },
	{ name: 'США', value: 22, color: '#1A2A48', weight: 22 },
	{ name: 'Турция', value: 1, color: '#F39C12', weight: 1 },
]

export const ShipmentDashboard: React.FC = () => {
	// Подсчет общего количества посылок
	const totalPackages = statusData.reduce((acc, item) => acc + item.value, 0)

	// Подсчет общего веса
	const totalWeight = countryData.reduce((acc, item) => acc + item.weight, 0)

	return (
		<section className={styles.dashboardContainer}>
			{/* Левая панель - Статус посылок */}
			<div className={styles.dashboardPanel}>
				<div className={styles.panelHeader}>
					<h6 className={clsx('h6', styles.status)}>Статус посылок</h6>
					<a href='#' className={clsx('bodyText', styles.detailsLink)}>
						Посмотреть детали
						<Details className={styles.externalIcon} />
					</a>
				</div>

				<div className={styles.panelContainer}>
					<div className={styles.chartContainer}>
						<ResponsiveContainer width='100%' height='100%'>
							<PieChart>
								<Pie
									data={statusData}
									cx='50%'
									cy='50%'
									innerRadius={80}
									outerRadius={110}
									fill='#8884d8'
									paddingAngle={1}
									dataKey='value'
								>
									{statusData.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={entry.color} />
									))}
								</Pie>
							</PieChart>
						</ResponsiveContainer>
						<div className={styles.chartCenter}>
							<div className={styles.totalLabel}>Общ кол-во</div>
							<div className={styles.totalValue}>{totalPackages}</div>
						</div>
					</div>
					<div className={styles.legendTable}>
						<div className={styles.legendTableHeader}>
							<div className={clsx(styles.statusLabel, 'bodyBold')}>Статус</div>
							<div className={clsx(styles.statusValue, 'bodyText')}>Кол-во</div>
						</div>
						<div className={clsx(styles.legendTableBody, 'hide-native-scrollbar')}>
							{statusData.map((item, index) => (
								<div key={`status-${index}`} className={styles.legendTableRow}>
									<div className={styles.statusSummary}>
										<span
											className={styles.statusDot}
											style={{ backgroundColor: item.color }}
										></span>
										{item.name}
									</div>
									<div className={clsx(styles.statusValue, 'bodyBold')}>{item.value}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Правая панель - Обзор посылок */}
			<div className={styles.dashboardPanel}>
				<div className={styles.panelHeader}>
					<h6 className={clsx('h6', styles.status)}>Обзор посылок</h6>
					<a href='#' className={clsx(styles.detailsLink, 'bodyText')}>
						Май
						<Details className={styles.externalIcon} />
					</a>
				</div>

				<div className={styles.panelContainer}>
					<div className={styles.chartContainer}>
						<ResponsiveContainer width='100%'>
							<PieChart>
								<Pie
									data={countryData}
									cx='50%'
									cy='50%'
									innerRadius={80}
									outerRadius={110}
									fill='#8884d8'
									paddingAngle={1}
									dataKey='value'
								>
									{countryData.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={entry.color} />
									))}
								</Pie>
							</PieChart>
						</ResponsiveContainer>
						<div className={styles.chartCenter}>
							<div className={styles.totalLabel}>Общ в кг</div>
							<div className={styles.totalValue}>{totalWeight}</div>
						</div>
					</div>
					<div className={styles.legendTable}>
						<div className={styles.legendTableHeader}>
							<div className={clsx(styles.statusLabel, 'bodyBold')}>Страна</div>
							<div className={clsx(styles.statusValue, 'bodyText')}>Вес</div>
						</div>
						<div className={clsx(styles.legendTableBody, 'hide-native-scrollbar')}>
							{countryData.map((item, index) => (
								<div key={`country-${index}`} className={styles.legendTableRow}>
									<div className={styles.statusSummary}>
										<span
											className={styles.statusDot}
											style={{ backgroundColor: item.color }}
										></span>
										{item.name}
									</div>
									<div className={clsx(styles.statusValue, 'bodyBold')}>{item.weight}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
