export type MaterialInputProps = {
	
} & React.InputHTMLAttributes<HTMLInputElement>

const MaterialInput:React.FC<MaterialInputProps> = (props) => {
	const {
		name, placeholder,
	} = props
	return (
		<div className="relative p-3 rounded bg-secondary focus-within:outline-primary_yellow">
			<input {...props} placeholder=" "
				className="duration-300 text-white block p-0 w-full text-base appearance-none outline-none border-none focus:ring-0 bg-transparent"
			/>
			<label htmlFor={name} className="absolute top-3 font-medium text-gray-500 duration-300 origin-0">
				{placeholder}
			</label>
		</div>
	)
}

export default MaterialInput
