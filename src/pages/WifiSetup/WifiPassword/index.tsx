import { ReactComponent as WifiSvg } from '../../../assets/svg/wifi.svg'
import { useHistory, useLocation } from 'react-router'
import Header from '../../../components/Header'

import MaterialInput from '../../../components/MaterialInput'
import React, { useCallback, useState } from 'react'
import YellowButton from '../../../components/YellowButton'
import { CONNECT_WIFI, SCAN_RESULTS, WIFI_STATUS } from '../../../services/ServiceUrl'
import { ErrorMessageState, useErrorMessage } from '../../../hooks/useErrorMessage'
import Alert from '../../../components/Alert'
import { useQueryClient } from 'react-query'
import { responseType } from '../../../hooks/useWifiStatus'
import { useWifiList } from '../../../hooks/useWifiList'

const authFailed = "Authentication Failed - Invalid Password";
const notInRange = "WiFi is not in range";
const notAnswering = "WiFi is not answering";

const DEFAULT_ERROR_MESSAGE = "Oops, there seems to be a problem connecting to your network. Check that you're within the Wi-Fi range and remember to select 2.4ghz."

const WifiPassword = () => {
	const history = useHistory()
	const location:any = useLocation()
	// const { data:ssidList } = useWifiList()

	const queryClient = useQueryClient()
	

	const [pw, setPW] = useState('')
	const { error, showMessageForTime, resetMessage, setError}= useErrorMessage()
	const data: responseType = queryClient.getQueryData(WIFI_STATUS.name)
	const ssidList = queryClient.getQueryData(SCAN_RESULTS.name)

	React.useEffect(()=>{
		console.log(location.state);
		// data?.connected && history.replace('/')
	},[])

	React.useEffect(()=>{
		if(data?.reason === "" ){
			resetMessage()
		}else{
			const reason = data?.reason ?? "" ;
			const message = (reason === notInRange || reason === notAnswering) ? DEFAULT_ERROR_MESSAGE : reason ;
			(location?.state?.ssid === data?.ssid) && setError({message: message, shown: true})
		}
		// data?.connected && history.replace('/')
	}, [data, data?.reason])

	React.useEffect(() => { 
		!(ssidList as string[])?.includes(location?.state?.ssid) && history.goBack()
	}, [ssidList])

	const onTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
		e.preventDefault();
		// console.log(e.target.value);
		resetMessage()
		setPW(e.target.value)
	},[])

	const onClick = ()=>{
		const data = { ssid: location?.state?.ssid, pass: pw }
		console.log(data);
		// return
		const requestOptions: RequestInit = {
			method: 'POST',
			body: JSON.stringify(data)
		};

		fetch(CONNECT_WIFI.url, requestOptions)
			.then(res=>res.text())
			.then(res=>{
				if(res === 'ok'){
					queryClient.setQueryData(WIFI_STATUS.name, (oldData: any) => ({ ...oldData, connected: false, reason:''}))
					history.push('/wifi-connecting',{ssid: location?.state?.ssid})
				}else{
					console.log('An unknow error occured!');
					showMessageForTime(DEFAULT_ERROR_MESSAGE, 5000)
				}
			})
			.catch((e)=>{
				console.log(e);
				console.log("An error occured, please try again!");
				showMessageForTime(DEFAULT_ERROR_MESSAGE, 10000)
			})
	}

	return (
		<>

			{/* Header */}
			<Header onBackPressed={() => history.goBack()}/>

			<div className="min-h-30px"/>


			<div className="self-stretch flex flex-col items-stretch gap-30px px-4">

				{
					(error as ErrorMessageState).shown && 
					<Alert message={(error as ErrorMessageState).message} danger/>
				}


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
								{location?.state?.ssid ?? 'Wifi Name'}
							</h4>
						</div>
					</div>
					

				</div>

				<MaterialInput maxLength={20} type="password" placeholder="Password" 
					onChange={onTextChange}
				/>
				
				<div className="self-stretch rounded">
					<YellowButton isDisabled={pw === ''} onClick={onClick}>
						Connect
					</YellowButton>
				</div>

			</div>
			
		</>
	)
}

export default WifiPassword