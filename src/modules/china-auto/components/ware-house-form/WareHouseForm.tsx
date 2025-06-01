'use client'

import { getCountryAndDeliveryType } from '@/utils/helper/getDeliveryTypeAndCountry'
import { useParams } from 'next/navigation'
import { FC, useMemo } from 'react'
import { WARE_HOUSE_ADDRESS_FIELD } from '../../consts/wareHouseAdress'
import { WareHouseInput } from '../UI/ware-house/WareHouseInput'
import { WareHouseTextArea } from '../UI/ware-house/WareHouseTextArea'
import { useGetWarehouseAddressesQuery } from '../warehouse-addresses/api/warehouseAddressesApi'

export const WareHouseForm: FC = () => {
	const { data, isLoading } = useGetWarehouseAddressesQuery({})
	const params = useParams()

	const slug = useMemo(() => {
		if (!params?.slug) return ''
		return typeof params.slug === 'string' ? params.slug : params.slug[0]
	}, [params?.slug])

	const { country, deliveryType } = useMemo(() => getCountryAndDeliveryType(slug), [slug])

	const warehouseAddress = useMemo(
		() =>
			data?.addresses?.find(
				(addr) => addr.country === country && addr.deliveryType === deliveryType
			),
		[data?.addresses, country, deliveryType]
	)

	const warehouseAddressFieldNames = WARE_HOUSE_ADDRESS_FIELD.find((el) => el.country === slug)

	if (isLoading) {
		return <div className='text-center py-6'>Загрузка...</div>
	}

	if (!warehouseAddress) {
		return <div className='text-center py-6 text-red-500'>Адрес не найден</div>
	}

	const { address } = warehouseAddress

	const renderField = (
		fieldValue: string | number | undefined,
		labelRu: string,
		labelOther?: string
	) => {
		if (!fieldValue || !labelOther) return null
		return (
			<WareHouseInput field={fieldValue} firstFieldName={labelRu} secondFieldName={labelOther} />
		)
	}

	return (
		<form className='flex flex-col gap-4'>
			{renderField(address?.city, 'Город', warehouseAddressFieldNames?.city)}
			{renderField(address?.line1, 'Адрес строка1', warehouseAddressFieldNames?.line1)}
			{renderField(address?.line2, 'Адрес строка2', warehouseAddressFieldNames?.line2)}
			{renderField(address?.name, 'Имя', warehouseAddressFieldNames?.name)}
			{renderField(address?.phone, 'Телефон', warehouseAddressFieldNames?.phone)}
			{renderField(address?.state, 'Штат область', warehouseAddressFieldNames?.state)}
			{renderField(address?.zip, 'Почтовый индекс', warehouseAddressFieldNames?.zip)}

			{address && <WareHouseTextArea address={address} />}
		</form>
	)
}
