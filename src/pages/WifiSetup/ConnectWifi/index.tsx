import { ReactComponent as BackSvg } from '../../../assets/svg/chevron-left.svg'
import { ReactComponent as WifiSetupSvg } from '../../../assets/svg/wifi-setup.svg'


import { useHistory } from 'react-router'

const ConnectWifi = () => {
	const history = useHistory()
	
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
					Setting up
				</h4>
				
				<p className="text-white opacity-80 text-base tracking-wide">
					Let's get your Bybit Moon Pillow connected to Wi-Fi.
				</p>
			</div>

			<div className="mb-2 max-h-full self-stretch flex flex-col items-stretch gap-3 px-4">
				
				<WifiSetupSvg className="max-h-[70%] w-full self-center"/>
				

				<button onClick={() => history.push('/wifi')}
					className="w-full p-3 font-medium text-base rounded-md bg-primary_yellow hover:bg-yellow-400"
				>
					Connect to Wi-Fi
				</button>
			</div>
			

		</>
	)
}

export default ConnectWifi