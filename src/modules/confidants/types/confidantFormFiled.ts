export type ConfidantFormField = {
	name: 'firstName' | 'lastName' | 'pin' | 'phoneNumber'
	label: string
	placeholder: string
	type: 'text' | 'tel'
}
