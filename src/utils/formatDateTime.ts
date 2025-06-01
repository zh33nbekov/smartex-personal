export const formatDateTime = (
	input?: string | number,
	locale: string = 'ru-RU'
): { date: string; time: string } => {
	if (!input) {
		return { date: '', time: '' }
	}

	const date = new Date(input)
	if (isNaN(date.getTime())) {
		return { date: '', time: '' }
	}

	const formattedDate = date.toLocaleDateString(locale, {
		day: '2-digit',
		month: 'long',
	})
	const formattedTime = date.toLocaleTimeString(locale, {
		hour: '2-digit',
		minute: '2-digit',
	})

	return { date: formattedDate, time: formattedTime }
}
