import { ContentWrapperProps } from '../../type/contentWrapper'

export const ContentWrapper = ({ children, title, subtitle }: ContentWrapperProps) => (
	<div className='w-[528px] w650:w-full bg-white px-[20px] pt-[24px] pb-[57px] rounded-2xl'>
		{title && <h4 className='h4 text-primary_text'>{title}</h4>}
		{subtitle && <p className='bodyText text-secondary_text mt-3'>{subtitle}</p>}
		<div className='mt-[24px]'>{children}</div>
	</div>
)
