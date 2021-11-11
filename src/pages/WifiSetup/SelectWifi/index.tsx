import { ReactComponent as WifiSvg } from '../../../assets/svg/wifi.svg'
import {ReactComponent as BackSvg} from '../../../assets/svg/chevron-left.svg'


import { useHistory } from 'react-router'
import Header from '../../../components/Header'

const SelectWifi = () => {
	const history = useHistory()
	const onClick = () => history.push('/wifi-pw')

	return (
		<>

			{/* Header */}
			<Header onBackPressed={()=> history.goBack()}/>

			<div className="min-h-30px"/>

			

			<div className="self-stretch px-4">
				<h4 className="text-white text-[28px] font-bold mb-2 ">
					Choose a Wi-Fi network
				</h4>
				
				{/* <Alert danger
					message="Oops, there seems to be a problem connecting to your network. Check that you're within the Wi-Fi range and remember to select 2.4ghz."
				/> */}

				<p className="text-white opacity-80 text-base tracking-wide">
					Choose a Wi-Fi network that you'd like to use to connect your Bybit Moon Pillow.
				</p>
			</div>

			<div className="min-h-30px" />

			<div className="max-h-full overflow-y-scroll self-stretch flex flex-col items-stretch gap-3 px-4">
				
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