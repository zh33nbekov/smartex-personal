import AppLayout from '@/layouts/AppLayout'
import { ParcelDetails } from '@/modules/parcel-details'
import { SearchParcel } from '@/modules/search-parcel'
import { Metadata } from 'next'

type Props = {
	params: Promise<{ id: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const { id } = await params

	return {
		title: `Мои посылки | ${id}`,
		description: `Информация о посылке с ID ${id}`,
	}
}

const ParcelDetailsPage = async ({ params }: Props) => {
	const { id } = await params

	return (
		<AppLayout>
			<SearchParcel />
			<ParcelDetails tracking={id} />
		</AppLayout>
	)
}

export default ParcelDetailsPage
