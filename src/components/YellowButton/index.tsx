export type YellowButtonProps = {

} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const YellowButton: React.FC<YellowButtonProps>  = (props) => {
	return (
		<button {...props}
			className={props.className + " w-full p-3 font-medium text-base rounded-md cursor-pointer text-black bg-primary_yellow focus:bg-primary_yellow_hover"}
		>
			{props.children}
		</button>
	)
}

export default YellowButton
