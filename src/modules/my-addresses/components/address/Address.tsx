type AddressProps = {
	icon: () => React.JSX.Element
	type: string
	street: string
}

export const Address = ({ icon: Icon, type, street }: AddressProps) => (
	<div className='bg-background border border-border py-4 px-5 rounded-2xl flex gap-4 w550:py-3 w550:px-4 w550:rounded-xl'>
		<div className='w-[40px] h-[40px] flex-shrink-0 bg-secondary rounded-full flex items-center justify-center'>
			<Icon />
		</div>
		<div>
			<span className='h6 block mb-2'>{type}</span>
			<span className='bodyText block'>{street}</span>
		</div>
	</div>
)
