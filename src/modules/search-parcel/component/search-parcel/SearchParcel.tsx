'use client'

import { useRouter } from 'next/navigation'
import { SearchParcelType } from '../../types/searchParcel'
import { SearchInput } from '../search-input/SearchInput'

export const SearchParcel: React.FC = () => {
	const router = useRouter()

	const handleSearch = (data: SearchParcelType) => {
		const trackingCode = data.search.trim().toUpperCase()
		if (trackingCode) {
			router.push(`/my-parcel/${trackingCode}`)
		}
	}

	return (
		<section>
			<SearchInput onSearch={handleSearch} />
		</section>
	)
}
