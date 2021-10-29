import { ReactComponent as AlertSvg } from '../../assets/svg/alert-octagon.svg'

export type AlertProps = {
	message: string, danger?: boolean
}

const Alert: React.FC<AlertProps> = ({message, danger=false}) => {
	return (
		<div className={
			`w-full flex gap-1 p-2 my-4 bg-gradient-to-b ${danger ? 'from-[#FF6433] to-[#D43535]' : 'from-[#424ABE] to-[#00087F]'}
			 text-white rounded-md`
		}
		>
			<AlertSvg className="fill-current w-16 mt-0.5" />
			<p className="text-14">
				{message}
			</p>
		</div>
	)
}

export default Alert
