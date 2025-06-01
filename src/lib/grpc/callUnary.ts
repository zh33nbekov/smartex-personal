import { getAccessToken } from '@/utils/helper/cookiesHelper'
import type { MetadataValue, ServiceError } from '@grpc/grpc-js'
import { Metadata } from '@grpc/grpc-js'

export const callUnary = async <Req, Res>(
	method: (req: Req, md: Metadata, cb: (err: ServiceError | null, res: Res) => void) => void,
	request: Req,
	extraHeaders: Record<string, MetadataValue> = {}
): Promise<Res> => {
	const md = new Metadata()

	const token = await getAccessToken()
	if (token) {
		md.add('authorization', 'Bearer wKK#JVCYqXpm7wRTMMDN%ripPfXUPCsF@npsRsCf%Ng35kABvr')
		md.add('Accept-Language', 'ru')
	}

	for (const [k, v] of Object.entries(extraHeaders)) md.add(k, v)

	return new Promise<Res>((resolve, reject) => {
		method(request, md, (err, res) => {
			if (err || !res) return reject(err)
			resolve(res)
		})
	})
}
