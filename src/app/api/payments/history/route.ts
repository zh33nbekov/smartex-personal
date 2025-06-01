import { callUnary } from '@/lib/grpc/callUnary'
import { mapGrpcCodeToHttpStatus } from '@/utils/grpc'
import { ServiceError } from '@grpc/grpc-js'
import { PaymentsHistoryRequest, PaymentsHistoryResponse, PaymentType } from '@proto/grpc/service'
import { NextRequest, NextResponse } from 'next/server'
import { paymentsClient } from '../../../../../grpc/clients'

export const GET = async (req: NextRequest): Promise<NextResponse> => {
	try {
		const { searchParams } = req.nextUrl
		const sortByParam = searchParams.get('sortBy')?.toUpperCase()
		const offsetParam = searchParams.get('offset')
		const sortBy = PaymentType[sortByParam as keyof typeof PaymentType] ?? PaymentType.ALL
		const offset = offsetParam ? parseInt(offsetParam, 10) : 0
		const request = { sortBy, offset }
		const response = await callUnary<PaymentsHistoryRequest, PaymentsHistoryResponse>(
			paymentsClient.history.bind(paymentsClient),
			request
		)

		return NextResponse.json(response)
	} catch (error) {
		console.error('gRPC error:', error)

		const status = (error as ServiceError).code ?? 500
		const message = (error as ServiceError).message ?? 'Unknown gRPC error'

		return NextResponse.json(
			{ error: 'Не удалось получить данные транзакции', details: message },
			{ status: mapGrpcCodeToHttpStatus(status) }
		)
	}
}
