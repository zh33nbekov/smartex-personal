import { AdditionalServiceForm } from '../additional-service-form/AdditionalServiceForm'

export const AddAdditionalService = () => {
	console.log()

	return (
		<div className='w-[528px] w650:w-full bg-white px-[20px] pt-[24px] pb-[40px] rounded-2xl'>
			<h4 className='h4 text-primary_text'>Дополнительные услуги</h4>
			<div className='mt-6'>
				<AdditionalServiceForm />
			</div>
		</div>
	)
}
