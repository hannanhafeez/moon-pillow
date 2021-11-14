export type YellowButtonProps = {
	isDisabled?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const YellowButton: React.FC<YellowButtonProps>  = (props) => {
	const {isDisabled=false, ...btnProps} = props
	return (
		<button {...btnProps} disabled={isDisabled}
			className={
				props.className 
				+ " w-full p-3 font-medium text-base rounded-md " 
				+ (isDisabled 
					? "cursor-not-allowed text-gray-500 bg-secondary"
					: "cursor-pointer text-black bg-primary_yellow focus:bg-primary_yellow_hover"
				)
			}
		>
			{props.children}
		</button>
	)
}

export default YellowButton
