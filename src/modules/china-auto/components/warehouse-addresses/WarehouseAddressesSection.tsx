'use client'

import { useState } from 'react'
import { FOREIGN_ADDRESSES } from '../../consts/foreignAddresses'
import { ForeignAddress } from '../../type/foreignAddress'
import { AddressAccordion } from '../address-accordion/AddressAccordion'
import { ContentWrapper } from '../content-wrapper/ContentWrapper'

export const WarehouseAddressesSection = () => {
	const [addressIndex, setAddressIndex] = useState<number>(0)

	const actualAddress: ForeignAddress | undefined = FOREIGN_ADDRESSES[addressIndex]
	const ActualContent = actualAddress.content

	return (
		<section className='relative w-full flex w1050:flex-col justify-between items-start gap-6'>
			<AddressAccordion
				foreignAddresses={FOREIGN_ADDRESSES}
				setAddressIndex={setAddressIndex}
				addressIndex={addressIndex}
			/>
			{actualAddress && (
				<ContentWrapper title={actualAddress.contentTitle} subtitle={actualAddress.subtitle}>
					<ActualContent />
				</ContentWrapper>
			)}
		</section>
	)
}
