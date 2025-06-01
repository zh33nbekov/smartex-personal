import { callUnary } from '@/lib/grpc/callUnary'
import { extractGrpcError, mapGrpcCodeToHttpStatus } from '@/utils/helper/grpcErrorHelper'
import { OrdersHistoryRequest, OrdersHistoryResponse } from '@proto/grpc/service'
import { ordersClient } from 'grpc/clients'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
	try {
		const { searchParams } = new URL(req.url)

		const offset = parseInt(searchParams.get('offset') || '0', 10)
		const country = Number(searchParams.get('country')) || 0
		const deliveryType = Number(searchParams.get('deliveryType')) || 0

		if (isNaN(offset) || typeof country !== 'number' || typeof deliveryType !== 'number') {
			return NextResponse.json(
				{ error: 'Неверный формат или значение параметров' },
				{ status: 400 }
			)
		}

		const request: OrdersHistoryRequest = {
			offset,
			country,
			deliveryType,
		}

		const response = await callUnary<OrdersHistoryRequest, OrdersHistoryResponse>(
			ordersClient.history.bind(ordersClient),
			request
		)

		return NextResponse.json(response)
	} catch (error) {
		const grpcErr = extractGrpcError(error)
		return NextResponse.json(
			{
				error: 'Ошибка при получении истории заказов',
				details: grpcErr.details,
			},
			{ status: mapGrpcCodeToHttpStatus(grpcErr.code) }
		)
	}
}
