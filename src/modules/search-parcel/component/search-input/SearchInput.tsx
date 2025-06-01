'use client'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { Search as SearchIcon } from '../../../../../public/icons/common/Search'
import { SearchParcelType } from '../../types/searchParcel'
import { searchParcelSchema } from '../../utils/searchParcelValidation'

type SearchProps = {
	onSearch: (data: SearchParcelType) => void
}

export const SearchInput = ({ onSearch }: SearchProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SearchParcelType>({
		resolver: zodResolver(searchParcelSchema),
	})

	return (
		<form
			onSubmit={handleSubmit(onSearch)}
			className={clsx(
				'w-full flex relative gap-[1.06rem] bg-white p-4 rounded-2xl w420:rounded-xl w750:p-3',
				errors.search?.message ? 'text-error' : 'text-icons'
			)}
		>
			<Input
				type='text'
				id='tracking-number'
				placeholder='Введите трекинг номер'
				className='py-[14px] pl-[52px] input-no-spinner w420:pl-[16px] w420:py-[0.7rem] w420:placeholder:text-[14px] w420:rounded-md'
				{...register('search')}
				errorMessage={errors.search?.message}
			/>
			<SearchIcon className='text-current absolute top-[31px] left-[36px] w750:top-[28px] w420:hidden' />
			<Button
				type='submit'
				className='self-start max-w-[250px] w1050:max-w-[150px] w550:max-w-[100px] w420:rounded-full w420:max-w-11 w420:h-11 flex items-center justify-center'
			>
				<span className='w420:hidden'>Искать</span>
				<div className='hidden w420:block'>
					<SearchIcon />
					<span className='sr-only'>Иконка поиска</span>
				</div>
			</Button>
		</form>
	)
}
