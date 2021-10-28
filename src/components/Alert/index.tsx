import { ReactComponent as AlertSvg } from '../../assets/svg/alert-octagon.svg'

export type AlertProps = {
	message: string
}

const Alert: React.FC<AlertProps> = ({message}) => {
	return (
		<div className="w-full flex gap-2 p-2 my-4 bg-gradient-to-b from-[#FF6433] to-[#D43535] text-white rounded-md">
			<AlertSvg className="fill-current h-5 w-5" />
			<p className="text-14">
				{message}
			</p>
		</div>
	)
}

export default Alert
