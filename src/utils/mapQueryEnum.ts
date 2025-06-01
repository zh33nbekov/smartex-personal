export const mapQueryEnum = <T extends object>(
	value: string | null,
	enumObj: T,
	fallback: T[keyof T] | undefined
): T[keyof T] | undefined => {
	if (!value) return fallback
	const key = value.toUpperCase() as keyof T
	return enumObj[key] ?? fallback
}
