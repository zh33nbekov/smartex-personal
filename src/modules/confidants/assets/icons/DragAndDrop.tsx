'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ArrowLongUp } from './ArrowLongUp'
import { Button } from '../../../../components/UI/Button'

interface FileUploadProps {
	label: string
	onFileAccepted: (file: File) => void
}

export const DragAndDrop = ({ label, onFileAccepted }: FileUploadProps) => {
	const [file, setFile] = useState<string>('')
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			if (acceptedFiles.length > 0) {
				onFileAccepted(acceptedFiles[0])
				setFile(acceptedFiles[0].name)
			}
		},
		[onFileAccepted]
	)
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
		accept: { 'image/*': [], 'application/pdf': [] },
	})

	return (
		<div className='flex flex-col space-y-2'>
			<label className='uiInputLabel text-primary_text'>{label}</label>
			<div
				{...getRootProps()}
				className='border border-dashed border-border py-[36px] px-4 rounded-[4px] text-center cursor-pointer bg-background hover:bg-background_hover transition'
			>
				<input {...getInputProps()} />
				<div className='flex items-start justify-center gap-[6px]'>
					<ArrowLongUp />
					{file ? (
						<p className='font-lato font-normal text-[13px] leading-[16px] text-secondary_text'>
							{file}
						</p>
					) : (
						<p className='font-lato font-normal text-[13px] leading-[16px] text-secondary_text'>
							{isDragActive
								? 'Отпустите файл, чтобы загрузить'
								: 'Перетащите файлы или нажмите, чтобы загрузить'}
						</p>
					)}
				</div>
				<p className='font-lato font-normal text-[13px] leading-[16px] text-secondary_text mt-[6px]'>
					или
				</p>
				<Button
					variant='white'
					type='button'
					size='md'
					className='max-w-[195px] mt-[6px]'
					style={{
						fontWeight: 'normal',
						fontFamily: 'Lato, sans-serif',
						color: 'var(--primary-text)',
						fontSize: '13px',
						lineHeight: '16px',
					}}
				>
					Загрузить с компьютера
				</Button>
			</div>
		</div>
	)
}
