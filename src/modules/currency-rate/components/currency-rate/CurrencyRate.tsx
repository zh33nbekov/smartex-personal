import clsx from 'clsx'
import Image from 'next/image'
import CurrencyRateImg from '../../assets/currency-rate.png'
import styles from './currency-rate.module.css'

export const CurrencyRate: React.FC = () => {
	console.log()

	return (
		<div className={styles['currency-rate']}>
			<div className={styles['currency-rate__header']}>
				<h4 className={clsx('h4')}>Курс валют</h4>
				<div className={styles['currency-rate__buttons']}>
					<button className={clsx(styles['currency-rate__button'], styles['active'])}>
						С
					</button>
					<button className={styles['currency-rate__button']}>$</button>
				</div>
			</div>
			<Image className={styles['currency-rate__image']} src={CurrencyRateImg} alt='Курс валют' />
			<div className={styles['currency-rate__footer']}>
				<h6 className='h6'>1289</h6>
				<h6 className='h6'>1 $ - 88.00 с</h6>
			</div>
		</div>
	)
}
