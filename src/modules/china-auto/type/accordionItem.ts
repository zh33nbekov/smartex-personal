import { ForeignAddress } from './foreignAddress'

export type AccordionItemProps = {
	address: ForeignAddress
	setAddressIndex: React.Dispatch<React.SetStateAction<number>>
	index: number
	addressIndex: number
}
