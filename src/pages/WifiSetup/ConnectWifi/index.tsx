import { ReactComponent as BackSvg } from '../../../assets/svg/chevron-left.svg'
import { ReactComponent as WifiSetupSvg } from '../../../assets/svg/wifi-fg.svg'
import { ReactComponent as WifiSetupBGSvg } from '../../../assets/svg/wifi-bg.svg'


import { useHistory } from 'react-router'
import Header from '../../../components/Header'
import YellowButton from '../../../components/YellowButton'

const ConnectWifi = () => {
	const history = useHistory()
	
	return (
		<>

			{/* Header */}
			<Header onBackPressed={() => history.goBack()}/>

			<div className="min-h-30px"/>


			<div className="self-stretch px-4">
				<h4 className="text-white text-[28px] font-bold mb-2 ">
					Setting up
				</h4>
				
				<p className="text-white opacity-80 text-base tracking-wide">
					Let's get your Bybit Moon Pillow connected to Wi-Fi.
				</p>
			</div>

			<div className="mb-2 self-stretch flex flex-col items-stretch gap-3 px-4">

				<div className="w-full scale-140 max-w-screen min-h-375 relative">
					<WifiSetupBGSvg className="absolute max-h-375 w-full self-center overflow-visible rotating-wifi-bg"/>
					<WifiSetupSvg className="absolute max-h-375 w-full self-center overflow-visible"/>
				</div>

				<YellowButton className="z-10" onClick={() => history.push('/wifi')}>
					Connect to Wi-Fi
				</YellowButton>
			</div>
			

		</>
	)
}

export default ConnectWifi