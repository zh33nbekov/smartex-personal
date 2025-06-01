import { Input } from '@/components/UI/Input'

export const Address = () => (
	<div className='max-w-[528px] w1050:max-w-full bg-white pt-6 px-5 pb-10 rounded-2xl'>
		<h4 className='h4 mb-6'>Адрес</h4>
		<Input className='mb-4' label='Город / Село' placeholder='Город / Село' />
		<Input label='Мкр / жм / ул / дом / кв' placeholder='Мкр / жм / ул / дом / кв' />
	</div>
)
