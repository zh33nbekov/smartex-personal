import { callUnary } from '@/lib/grpc/callUnary'
import { mapGrpcCodeToHttpStatus } from '@/utils/grpc'
import { ServiceError } from '@grpc/grpc-js'
import { TrackingRequest, TrackingResponse } from '@proto/grpc/service'
import { NextRequest, NextResponse } from 'next/server'
import { activitiesClient } from '../../../../grpc/clients'

export const GET = async (req: NextRequest): Promise<NextResponse> => {
	try {
		const { searchParams } = req.nextUrl
		const tracking = searchParams.get('tracking')

		if (!tracking) {
			return NextResponse.json({ error: 'Отсутствует трек код' }, { status: 400 })
		}

		const request: TrackingRequest = { tracking }
		const response = await callUnary<TrackingRequest, TrackingResponse>(
			activitiesClient.tracking.bind(activitiesClient),
			request
		)

		return NextResponse.json(response)
	} catch (error: unknown) {
		console.error('gRPC error:', error)

		const status = (error as ServiceError).code ?? 500
		const message = (error as ServiceError).message ?? 'Unknown gRPC error'

		return NextResponse.json(
			{ error: 'Не удалось получить данные отслеживания', details: message },
			{ status: mapGrpcCodeToHttpStatus(status) }
		)
	}
}
