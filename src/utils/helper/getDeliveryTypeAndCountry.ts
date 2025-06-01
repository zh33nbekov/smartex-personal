import { Country, DeliveryType } from '@proto/proto/service'

type ResponseData = {
	country?: Country
	deliveryType?: DeliveryType
}

export const getCountryAndDeliveryType = (params: string): ResponseData => {
	switch (params) {
		case 'china-auto':
			return { country: Country.CHINA, deliveryType: DeliveryType.GROUND }
		case 'china-avia':
			return { country: Country.CHINA, deliveryType: DeliveryType.AIR }
		case 'usa':
			return { country: Country.USA, deliveryType: DeliveryType.AIR }
		case 'turkish':
			return { country: Country.TURKEY, deliveryType: DeliveryType.AIR }
		default:
			return {}
	}
}
