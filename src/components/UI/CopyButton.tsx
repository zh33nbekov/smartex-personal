'use client'

import { useState } from 'react'
import { Copy } from '../../../public/icons/common/Copy'

type CopyButtonProps = {
	textToCopy: string | number
}

export const CopyButton = ({ textToCopy }: CopyButtonProps) => {
	const [copied, setCopied] = useState(false)

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(String(textToCopy))
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (error) {
			console.error('Copy failed:', error)
		}
	}

	return (
		<button
			type='button'
			onClick={handleCopy}
			aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
			title={copied ? 'Copied!' : 'Copy'}
			className='text-icons'
		>
			<Copy />
		</button>
	)
}
