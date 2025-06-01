import { BakaiLogo } from '../assets/BakaiLogo'
import { ELQRLogo } from '../assets/ELQRLogo'
import { MBankLogo } from '../assets/MBankLogo'
import { OptimaLogo } from '../assets/OptimaLogo'
import { SmartexLogo } from '../assets/SmartexLogo'
import { DepositMethod } from '../types/depositMethod'

export const DEPOSIT_METHODS: DepositMethod[] = [
	{
		label: 'Оптима банк',
		value: 'Оптима банк',
		icon: OptimaLogo,
	},
	{
		label: 'М банк',
		value: 'М банк',
		icon: MBankLogo,
	},
	{
		label: 'ELQR',
		value: 'ELQR',
		icon: ELQRLogo,
	},
	{
		label: 'Бакай банк',
		value: 'Бакай банк',
		icon: BakaiLogo,
	},
	{
		label: 'Smartex',
		value: 'Smartex',
		icon: SmartexLogo,
	},
] as const
