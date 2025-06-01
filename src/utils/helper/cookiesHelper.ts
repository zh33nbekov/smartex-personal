import { cookies } from 'next/headers'

export const saveAccessToken = async (token: string) => {
	const cookieStore = await cookies()
	cookieStore.set('accessToken', token, {
		httpOnly: true,
		path: '/',
		domain: 'vercel.app',
		maxAge: 60 * 60 * 24 * 7,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
	})
}

export const getAccessToken = async (): Promise<string | undefined> => {
	const cookieStore = await cookies()
	return cookieStore.get('accessToken')?.value
}

export const removeAccessToken = async () => {
	const cookieStore = await cookies()
	cookieStore.delete('accessToken')
}
