import { Header } from '@/components/header/Header'
import { Navbar } from '@/components/navbar/Navbar'
import { Breadcrumbs } from '@/components/UI/Breadcrumbs'

type AppLayoutProps = {
	children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
	<div className='flex w-screen h-screen overflow-hidden'>
		<Navbar />
		<div className='flex flex-col flex-1 h-screen overflow-hidden'>
			<Header />
			<main className='flex-1 overflow-y-auto container scroll-smooth'>
				<Breadcrumbs />
				{children}
			</main>
		</div>
	</div>
)

export default AppLayout
