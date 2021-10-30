import { ReactComponent as WifiSvg } from '../../../assets/svg/wifi.svg'
import {ReactComponent as BackSvg} from '../../../assets/svg/chevron-left.svg'
import { useHistory } from 'react-router'

const WifiPassword = () => {
	const history = useHistory()

	return (
		<>

			{/* Header */}
			<div className="self-stretch px-4">
				<button className="py-4 grid grid-flow-col justify-start items-center gap-1" onClick={()=>history.goBack()}>
					<BackSvg />
					<p className="text-primary_yellow text-center text-14 font-medium uppercase tracking-widest">
						Back
					</p>
				</button>
			</div>


			<div className="self-stretch px-4 mb-4">
				<h4 className="text-white text-[28px] font-bold mb-2 ">
					Enter Wi-Fi password
				</h4>
				
			</div>

			<div className="mb-2 max-h-full overflow-y-scroll self-stretch flex flex-col items-stretch gap-2 px-4">
				
				<div className="flex items-center rounded-lg">
					<div className="h-8 w-6 grid place-content-center">
						<WifiSvg className="h-5 w-5 fill-current text-primary_yellow " />
					</div>
					<div className="mx-2">
						<h4 className="text-white font-bold text-base">
							SGLinksys00043
						</h4>
					</div>
				</div>
				

			</div>
			
			<div className="self-stretch px-4 rounded-lg">
				<input type="text" placeholder="Password"
					className="w-full p-3 font-medium text-base rounded-lg bg-secondary border-0 text-white placeholder-gray-500"
				/>
			</div>
			
			<div className="self-stretch px-4 my-4 rounded-lg">
				<button onClick={() => history.push('/wifi-connecting')}
					className="w-full p-3 font-medium text-base rounded-md text-gray-500 hover:text-black bg-secondary hover:bg-primary_yellow"
				>
					Connect
				</button>
			</div>
			

		</>
	)
}

export default WifiPassword