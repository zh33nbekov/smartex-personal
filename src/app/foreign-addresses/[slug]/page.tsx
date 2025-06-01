import { FOREIGN_ADDRESSES_PAGES } from '@/consts/foreignAddRessesPages'
import AppLayout from '@/layouts/AppLayout'
import { WarehouseAddressesSection } from '@/modules/china-auto/components/warehouse-addresses/WarehouseAddressesSection'
import { notFound } from 'next/navigation'

type Params = Promise<{ slug: string }>

export default async function ForeignAddressesPage(props: { params: Params }) {
	const params = await props.params
	const slug = params.slug

	if (!FOREIGN_ADDRESSES_PAGES.includes(slug)) {
		notFound()
	}

	return (
		<AppLayout>
			<WarehouseAddressesSection />
		</AppLayout>
	)
}
