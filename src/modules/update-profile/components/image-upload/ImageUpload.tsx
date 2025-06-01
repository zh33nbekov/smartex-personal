import { FileUploader } from '@/components/file-uploader/FileUploader'
import { AccountIcon } from '../../assets/icons/AccountIcon'
import { ImageRequirements } from '../image-requirements/ImageRequirements'

type ImageUploadProps = {
	onFetchFile: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClearFiles: () => void
}

export const ImageUpload = ({ onFetchFile, onClearFiles }: ImageUploadProps) => (
	<div className='flex mb-6 w1050:justify-between'>
		<div className='flex gap-5 pr-5 w370:flex-col w370:pr-0 w370:gap-1 w370:items-center'>
			<div className='flex items-center justify-center w-[3.75rem] h-[3.75rem] w370:w-[2.75rem] w370:h-[2.75rem] flex-shrink-0 bg-background rounded-full'>
				<AccountIcon />
			</div>
			<div className='flex flex-col'>
				<FileUploader accept='image/*' onFetchFile={onFetchFile}>
					<button
						type='button'
						className='p-3 leading-[100%] text-[13px] transition font-medium tracking-[0.42px] border-white border hover:border-secondary rounded-lg w550:hover:'
					>
						Upload Photo
					</button>
				</FileUploader>
				<button
					type='button'
					className='mt-2 leading-5 text-[16px] font-bold tracking-[0.42px]'
					onClick={onClearFiles}
				>
					Delete
				</button>
			</div>
		</div>
		<ImageRequirements />
	</div>
)
