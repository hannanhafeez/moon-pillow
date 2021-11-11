import { ReactComponent as WifiSvg } from '../../../assets/svg/wifi.svg'
import { useHistory } from 'react-router'
import Header from '../../../components/Header'

import MaterialInput from '../../../components/MaterialInput'

const WifiPassword = () => {
	const history = useHistory()

	return (
		<>

			{/* Header */}
			<Header onBackPressed={() => history.goBack()}/>

			<div className="min-h-30px"/>


			<div className="self-stretch flex flex-col items-stretch gap-30px px-4">


				<div className="self-stretch">
					<h4 className="text-white text-[28px] font-bold">
						Enter Wi-Fi password
					</h4>
					
				</div>

				<div className="max-h-full overflow-y-scroll self-stretch flex flex-col items-stretch gap-2">
					
					<div className="flex items-center rounded">
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

				<MaterialInput type="password" placeholder="Password"/>
				
				<div className="self-stretch rounded">
					<button onClick={() => history.push('/wifi-connecting')}
						className="w-full p-3 font-medium text-base rounded-md text-gray-500 hover:text-black bg-secondary hover:bg-primary_yellow"
					>
						Connect
					</button>
				</div>

			</div>
			
		</>
	)
}

export default WifiPassword