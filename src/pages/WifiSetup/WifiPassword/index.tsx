import { ReactComponent as WifiSvg } from '../../../assets/svg/wifi.svg'
import { useHistory, useLocation } from 'react-router'
import Header from '../../../components/Header'

import MaterialInput from '../../../components/MaterialInput'
import React, { useCallback, useState } from 'react'
import YellowButton from '../../../components/YellowButton'
import { CONNECT_WIFI } from '../../../services/ServiceUrl'
import { ErrorMessageState, useErrorMessage } from '../../../hooks/useErrorMessage'
import Alert from '../../../components/Alert'

const WifiPassword = () => {
	const history = useHistory()
	const location:any = useLocation()

	const [pw, setPW] = useState('')
	const { error, showMessageForTime}= useErrorMessage()

	React.useEffect(()=>{
		console.log(location.state);
	},[])

	const onTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
		e.preventDefault();
		// console.log(e.target.value);
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
					history.push('/wifi-connecting',{ssid: location?.state?.ssid})
				}else{
					showMessageForTime('An unknow error occured!', 5000)
				}
			})
			.catch((e)=>{
				console.log(e);
				
				showMessageForTime("An error occured, please try again!", 10000)
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