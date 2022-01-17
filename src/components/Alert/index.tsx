import { ReactComponent as AlertSvg } from '../../assets/svg/alert-octagon.svg'
import { ReactComponent as BackSvg } from '../../assets/svg/chevron-left.svg'

export type AlertProps = {
	general?: boolean, onClick?: ()=>void,
	message?: string, danger?: boolean
}

const Alert: React.FC<AlertProps> = ({message, general=true, danger=false, onClick, children}) => {
	if(general){
		return (
			<button className="self-stretch px-4 my-2" onClick={onClick}>
				<div className={
					`w-full flex gap-2.5 p-4 bg-alert_general_bg text-primary_yellow rounded-md`
				}
				>
					<div className='w-4 h-4'>
						<AlertSvg className="fill-current h-4 mt-0.5" />
					</div>
					<div className="flex flex-col items-stretch flex-grow text-white">
						<p className="text-14 leading-4 ">
							{message}
						</p>
					</div>
					<div className='w-4 self-center'>
						<BackSvg className="w-4 h-4 fill-current rotate-180" />
					</div>
				</div>
			</button>
		)
	}
	
	return (
		<div className={
			`w-full flex gap-2.5 p-4 bg-gradient-to-b ${danger ? 'from-danger_grad_light to-danger_grad_dark' : 'from-blue_grad_light to-blue_grad_dark'}
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
