import { ReactComponent as AlertSvg } from '../../assets/svg/alert-octagon.svg'

export type AlertProps = {
	message?: string, danger?: boolean
}

const Alert: React.FC<AlertProps> = ({message, danger=false, children}) => {
	return (
		<div className={
			`w-full flex gap-2.5 p-4 bg-gradient-to-b ${danger ? 'from-[#FF6433] to-[#D43535]' : 'from-[#424ABE] to-[#00087F]'}
			 text-white rounded-md`
		}
		>
			<AlertSvg className="fill-current h-4 mt-0.5" />
			<div className="flex flex-col items-stretch">
				<p className="text-14 leading-4">
					{message}
				</p>
				{
					children
				}
			</div>
		</div>
	)
}

export default Alert
