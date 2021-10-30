import React from 'react'
import { ReactComponent as BackSvg } from '../../../assets/svg/chevron-left.svg'
import { ReactComponent as ConnectingSvg } from '../../../assets/svg/wifi-connecting-graphic.svg'
import { ReactComponent as ConnectedCheckSvg } from '../../../assets/svg/connected-check.svg'
import { ReactComponent as WifiSvg } from '../../../assets/svg/wifi.svg'

import { useHistory } from 'react-router'
import { clearTimeout } from 'timers'

const ConnectingWifi = () => {
	const history = useHistory()
	const [isConnected, setConnected] = React.useState(false);
	
	React.useEffect(()=>{
		const id = setTimeout(()=> setConnected(true), 3000)
		// return () => clearTimeout(id)
	},[])

	return (
		<>
			{/* Header */}
			<div className="self-stretch px-4">
				<button className="py-4 grid grid-flow-col justify-start items-center gap-1" onClick={() => history.replace('/')}>
					<BackSvg />
					<p className="text-primary_yellow text-center text-14 font-medium uppercase tracking-widest">
						Back
					</p>
				</button>
			</div>

			<div className="self-stretch w-full h-full relative overflow-hidden">
				
				<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-stretch overflow-scroll p-4">

					{
						isConnected ? 
							<>
								<div className="flex flex-col gap-2 justify-center items-center relative">

									<ConnectingSvg className=" my-[-24px]" />

									<div className="absolute flex flex-col items-center -mt-8">

										<ConnectedCheckSvg />

										<div className="h-4"/>
										
										<p className="text-white text-base opacity-80">
											Wi-Fi is connected!
										</p>

										<div className="flex items-center gap-2">
											<div className="h-8 w-8 grid place-content-center p-[1px]">
												<WifiSvg className="w-5 h-5 fill-current text-primary_yellow" />
											</div>

											<h4 className="text-white font-bold text-base">{'SGLinksys00043'}</h4>

										</div>
									</div>

								</div>
								<button onClick={() => history.replace('/')}
									className="w-full p-3 font-medium text-base rounded-md text-black bg-primary_yellow hover:bg-yellow-400 mt-4"
								>
									Back to home
								</button>
							</>
						:
							<div className="p-4 flex flex-col gap-2 justify-center items-center relative">
							
								<ConnectingSvg className=" my-[-24px]"/>

								<div className="absolute flex flex-col items-center">
									<p className="text-white text-base opacity-80">
										Connecting to
									</p>

									<div className="flex items-center gap-2">
										<div className="h-8 w-8 grid place-content-center p-[1px]">
											<WifiSvg className="w-5 h-5 fill-current text-primary_yellow" />
										</div>

										<h4 className="text-white font-bold text-base">{'SGLinksys00043'}</h4>

									</div>
								</div>
							</div>
					}
					

				</div>

			</div>

		</>
	)
}

export default ConnectingWifi