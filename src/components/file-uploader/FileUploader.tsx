'use client'

import { useRef } from 'react'

type FileUploaderProps = {
	accept: string
	children: React.ReactNode
	onFetchFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileUploader = ({ children, accept, onFetchFile }: FileUploaderProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	return (
		<div onClick={() => inputRef.current?.click()}>
			<input
				type='file'
				ref={inputRef}
				className='hidden'
				accept={accept}
				name='image'
				id='name'
				onChange={onFetchFile}
			/>
			{children}
		</div>
	)
}
