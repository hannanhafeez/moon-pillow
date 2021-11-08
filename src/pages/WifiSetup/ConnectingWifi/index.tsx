import React from 'react'
import { ReactComponent as BackSvg } from '../../../assets/svg/chevron-left.svg'
import { ReactComponent as ConnectingSvg } from '../../../assets/svg/wifi-connecting-graphic.svg'
import { ReactComponent as ConnectedCheckSvg } from '../../../assets/svg/connected-check.svg'
import { ReactComponent as WifiSvg } from '../../../assets/svg/wifi.svg'

import { useHistory } from 'react-router'
import { clearTimeout } from 'timers'
import Header from '../../../components/Header'

const ConnectingWifi = () => {
	const history = useHistory()
	const [isConnected, setConnected] = React.useState(false);
	
	React.useEffect(()=>{
		/* const id =  */setTimeout(()=> setConnected(true), 3000)
		// return () => clearTimeout(id)
	},[])

	return (
		<>
			{/* Header */}
			<Header/>

			<div className="self-stretch w-full h-full relative ">
				
				<div className="flex flex-col items-stretch p-4">

					{
						isConnected ? 
							<>
								<div className="flex flex-col gap-2 justify-center items-center relative">

									<ConnectingSvg className=" -my-16 overflow-visible" />

									<div className="absolute flex flex-col items-center -mt-8">

										<ConnectedCheckSvg className="overflow-visible" />

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
									className="w-full p-3 mb-3 font-medium text-base rounded-md text-black bg-primary_yellow hover:bg-yellow-400 mt-4"
								>
									Back to home
								</button>
							</>
						:
							<div className="px-4 pb-30px flex flex-col gap-2 justify-center items-center relative">
							
								<ConnectingSvg className="-my-16 overflow-visible"/>

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