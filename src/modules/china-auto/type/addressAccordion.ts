import { ForeignAddress } from './foreignAddress'

export type AddressAccordionProps = {
	foreignAddresses: ForeignAddress[]
	setAddressIndex: React.Dispatch<React.SetStateAction<number>>
	addressIndex: number
}
