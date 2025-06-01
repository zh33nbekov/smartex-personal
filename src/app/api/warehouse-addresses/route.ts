import { callUnary } from '@/lib/grpc/callUnary'
import { extractGrpcError, mapGrpcCodeToHttpStatus } from '@/utils/helper/grpcErrorHelper'
import { WarehouseAddressesResponse } from '@proto/grpc/service'
import { activitiesClient } from 'grpc/clients'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
	try {
		const response = await callUnary<NextRequest, WarehouseAddressesResponse>(
			activitiesClient.warehouseAddresses.bind(activitiesClient),
			req
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
