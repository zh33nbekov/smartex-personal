import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	devIndicators: false,
	reactStrictMode: true,
	images: {
		formats: ['image/avif'],
		remotePatterns: [
			{
				hostname: '*',
				protocol: 'https',
			},
		],
	},
}

export default nextConfig
