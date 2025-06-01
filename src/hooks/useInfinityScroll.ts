import { useCallback, useEffect, useRef, useState } from 'react'

interface UseRTKInfiniteScrollProps<T> {
	trigger: (args: { offset: number }) => Promise<{ data?: { orders: T[] } }>
	limit?: number
	autoFetch?: boolean
}

export const useRTKInfiniteScroll = <T>({
	trigger,
	limit = 20,
	autoFetch = true,
}: UseRTKInfiniteScrollProps<T>) => {
	const [offset, setOffset] = useState(0)
	const [data, setData] = useState<T[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)
	const [hasMore, setHasMore] = useState(true)

	const observerRef = useRef<IntersectionObserver | null>(null)

	const loadMore = useCallback(async () => {
		if (isLoading || !hasMore) return
		setIsLoading(true)

		try {
			const { data: result } = await trigger({ offset })
			const newData = result?.orders || []

			setData((prev) => [...prev, ...newData])
			if (newData.length < limit) {
				setHasMore(false)
			} else {
				setOffset((prev) => prev + 1)
			}
		} catch (err) {
			setError(err as Error)
			setHasMore(false)
		} finally {
			setIsLoading(false)
		}
	}, [trigger, offset, isLoading, hasMore, limit])

	useEffect(() => {
		if (autoFetch) {
			loadMore()
		}
	}, [autoFetch, loadMore])

	const sentinelRef = useCallback(
		(node: HTMLDivElement) => {
			if (isLoading || !hasMore) return
			if (observerRef.current) observerRef.current.disconnect()

			observerRef.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					loadMore()
				}
			})

			if (node) observerRef.current.observe(node)
		},
		[isLoading, hasMore, loadMore]
	)

	return {
		data,
		isLoading,
		error,
		hasMore,
		sentinelRef,
	}
}
