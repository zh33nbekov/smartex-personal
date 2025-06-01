import ReduxProvider from '@/providers/ReduxProvider'
import { Lato, Poppins, Roboto, Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
	variable: '--font-rubik',
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
})

const lato = Lato({
	variable: '--font-lato',
	subsets: ['latin'],
	weight: ['100', '300', '400', '700', '900'],
	display: 'swap',
})

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: ['100', '300', '400', '700', '900'],
})

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['100', '300', '400', '700', '900'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${rubik.variable} ${lato.variable} ${roboto.variable} ${poppins.variable} antialiased`}
			>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
