import React, { useEffect, useRef } from 'react'
import { ReactComponent as BackSvg } from '../../../assets/svg/chevron-left.svg'
import { ReactComponent as ConnectingSvg } from '../../../assets/svg/wifi-connecting-graphic.svg'
import { ReactComponent as ConnectedCheckSvg } from '../../../assets/svg/connected-check.svg'
import { ReactComponent as WifiSvg } from '../../../assets/svg/wifi.svg'

import { useHistory, useLocation } from 'react-router'
import Header from '../../../components/Header'
import YellowButton from '../../../components/YellowButton'
import { useQueryClient } from 'react-query'
import { WIFI_STATUS } from '../../../services/ServiceUrl'
import { responseType } from '../../../hooks/useWifiStatus'
import { LandingStatus, useLandingStatus } from '../../../hooks/useLandingStatus'



const authFailed = "Authentication Failed - Invalid Password";
const notInRange = "WiFi is not in range";
const notAnswering = "WiFi is not answering";


const ConnectingWifi = () => {
	const history = useHistory()
	const location: any = useLocation()
	const [isConnected, setConnected] = React.useState(false);

	const queryClient = useQueryClient()

	const data: responseType = queryClient.getQueryData(WIFI_STATUS.name)
	const landingStatus = useLandingStatus()

	const vibration = (landingStatus.data as LandingStatus)?.vibration

	React.useEffect(()=>{
		setTimeout(()=>{
			const res: responseType = queryClient.getQueryData(WIFI_STATUS.name);
			if (res?.reason === authFailed || res?.reason === notInRange || res?.reason === notAnswering){
				history.goBack();
			}
		}, 10 * 1000)
	},[])


	React.useEffect(()=>{
		// /* const id =  */setTimeout(()=> setConnected(true), 3000)
		// return () => clearTimeout(id)
		if (data?.reason === authFailed || data?.reason === notInRange || data?.reason === notAnswering){
			history.goBack();
		}
		console.log(data);
		data?.connected && setConnected(true)
		// data?.connected && setTimeout(()=> setConnected(true), 3000)
	}, [data, data?.connected])


	return (
		<>
			{/* Header */}
			{	
				!isConnected 
				? <Header onBackPressed={() => history.goBack()}/>
				: <div className="min-h-18px"/>
			}

			<div className="self-stretch w-full h-full relative ">
				
				<div className="flex flex-col items-stretch p-4">

					{
						isConnected ? 
							<>
								<div className="transition-all flex flex-col gap-2 justify-center items-center relative">

									<ConnectingSvg className=" -my-16 overflow-visible" />

									<div className="absolute flex flex-col items-center -mt-8">

										<ConnectedCheckSvg className="overflow-visible animate-fade-in-down" />

										<div className="h-4"/>
										
										<p className="text-white text-base opacity-80">
											Wi-Fi is connected!
										</p>

										<div className="flex items-center gap-2">
											<div className="h-8 w-8 grid place-content-center p-[1px]">
												<WifiSvg className="w-5 h-5 fill-current text-primary_yellow" />
											</div>

											<h4 className="text-white font-bold text-base">{location?.state?.ssid ?? 'Wifi Name'}</h4>

										</div>
									</div>

								</div>

								{	!vibration &&
									<p className="text-center text-white text-base mb-8">
										Next, let's test the vibration alert on your Bybit Moon Pillow.
									</p>
								}

								<YellowButton className="z-10" onClick={() => history.replace(vibration ? '/' : '/vibration')}>
									{vibration ? 'Back to home' : 'Continue'}
								</YellowButton>
							</>
						:
							<div className="px-4 pb-30px flex flex-col gap-2 justify-center items-center relative">
							
								<ConnectingSvg className="-my-16 overflow-visible rotating-wifi-bg"/>

								<div className="absolute flex flex-col items-center">
									<p className="text-white text-base opacity-80">
										Connecting to
									</p>

									<div className="flex items-center gap-2">
										<div className="h-8 w-8 grid place-content-center p-[1px]">
											<WifiSvg className="w-5 h-5 fill-current text-primary_yellow" />
										</div>

										<h4 className="text-white font-bold text-base">{location?.state?.ssid ?? 'Wifi Name'}</h4>

									</div>
								</div>
							</div>
					}
					

				</div>

			</div>

		</>
	)
}

const useHasChanged = (val: any) => {
	const prevVal = usePrevious(val)
	return prevVal !== val
}

const usePrevious = (value: any) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

export default ConnectingWifi