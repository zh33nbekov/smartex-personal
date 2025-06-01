// Простой маппинг gRPC кодов в HTTP статусы
export const mapGrpcCodeToHttpStatus = (code: number): number => {
	switch (code) {
		case 3: // INVALID_ARGUMENT
			return 400
		case 5: // NOT_FOUND
			return 404
		case 7: // PERMISSION_DENIED
		case 16: // UNAUTHENTICATED
			return 403
		case 14: // UNAVAILABLE
			return 503
		default:
			return 500
	}
}
