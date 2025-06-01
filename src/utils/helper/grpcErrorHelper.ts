import type { MetadataValue, ServiceError } from '@grpc/grpc-js'

export const mapGrpcCodeToHttpStatus = (code: number): number => {
	switch (code) {
		case 0:
			return 200
		case 3:
			return 400
		case 5:
			return 404
		case 7:
			return 403
		case 16:
			return 401
		default:
			return 500
	}
}

export interface GrpcErrorPayload {
	code: number
	details: string
	metadata: Record<string, MetadataValue>
	log: unknown
}

export const extractGrpcError = (error: unknown): GrpcErrorPayload => {
	if (typeof error === 'object' && error !== null && 'code' in error) {
		const err = error as ServiceError
		return {
			code: err.code,
			details: err.details,
			metadata: err.metadata?.getMap?.() ?? {},
			log: err,
		}
	}

	return {
		code: 13,
		details: 'Unknown server error',
		metadata: {},
		log: error,
	}
}
