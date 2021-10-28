import { ReactComponent as WifiSvg } from '../../../assets/svg/wifi.svg'
import {ReactComponent as BackSvg} from '../../../assets/svg/chevron-left.svg'


import { useHistory } from 'react-router'
import Alert from '../../../components/Alert'

const SelectWifi = () => {
	const history = useHistory()
	const onClick = () => history.push('/wifi-pw')

	return (
		<>

			{/* Header */}
			<div className="self-stretch px-4">
				<button className="py-4 grid grid-flow-col justify-start items-center gap-1" onClick={() => history.goBack()}>
					<BackSvg />
					<p className="text-primary_yellow text-center text-14 font-medium uppercase tracking-widest">
						Back
					</p>
				</button>
			</div>



			<div className="self-stretch px-4 mb-4">
				<h4 className="text-white text-[28px] font-bold mb-2 ">
					Choose a Wi-Fi network
				</h4>
				
				{/* <Alert 
					message="Oops, there seems to be a problem connecting to your network. Check that you're within the Wi-Fi range and remember to select 2.4ghz."
				/> */}

				<p className="text-white opacity-80 text-base tracking-wide">
					Choose a Wi-Fi network that you'd like to use to connect your Bybit Moon Pillow.
				</p>
			</div>

			<div className="mb-2 max-h-full overflow-y-scroll self-stretch flex flex-col items-stretch gap-3 px-4">
				
				{
					wifiNames.map((name,ind)=>(
						<WifiButton key={`${name}-${ind}`} name={name + ind} onPress={onClick}/>
					))
				}

				<button className="flex items-center px-3 py-2 h-12 bg-secondary_dark hover:bg-secondary_light rounded-lg"
					onClick={()=>history.push('/wifi-manual')}
				>
					<div className="mx-2">
						<h4 className="text-white font-bold text-base">
							Join another Wi-Fi network
						</h4>
					</div>
				</button>
			</div>
			

		</>
	)
}

export default SelectWifi

type WifiButtonProps = {
	name?: string;
	onPress?: ()=>void
}


const WifiButton: React.FC<WifiButtonProps> = ({ name, onPress }) => {
	return(
		<button className="flex items-center px-3 py-2 bg-secondary_dark hover:bg-secondary_light rounded-lg"
			onClick={onPress}
		>
			<div className="h-8 w-8 grid place-content-center">
				<WifiSvg className="h-5 w-5 fill-current text-white "/>
			</div>

			<div className="mx-2">
				<h4 className="text-white font-medium text-base">{name ?? 'Wi-fi Name'}</h4>
			</div>
		</button>
	)
}

const wifiNames:string[] = [
	'SGLinksys00043',
	'TPLinksys00043',
	'SGLinksys00043',
	'Homesys00045',
	'SGLinksys00042',
	'Homesys00045',
]