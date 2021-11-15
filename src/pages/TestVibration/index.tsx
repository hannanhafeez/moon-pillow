import { ReactComponent as RefreshSvg } from '../../assets/svg/refresh.svg'
import { ReactComponent as VibrationSvg } from '../../assets/svg/vibration-graphic.svg'

import { useHistory } from 'react-router'
import Header from '../../components/Header'
import YellowButton from '../../components/YellowButton'
import { useErrorMessage } from '../../hooks/useErrorMessage'
import { SEND_VIBRATE } from '../../services/ServiceUrl'
import React from 'react'

const TestVibration = () => {
	const history = useHistory()
	const {error, resetMessage, setError} = useErrorMessage()

	const onClick = React.useCallback(() => {
		resetMessage()
		const data = { vibrate: true }
		// return
		const requestOptions: RequestInit = {
			method: 'POST',
			body: JSON.stringify(data)
		};

		fetch(SEND_VIBRATE.url, requestOptions)
			.then(res => res.text())
			.then(res => {
				console.log(res);
				if (res === 'ok' || res === 'Captive Portal') {
				} else {
					setError({message:'An unknow error occured!', shown:true})
				}
			})
			.catch((e) => {
				console.log(e);
				setError({ message: "An error occured, please try again!", shown: true })
			})
	},[])

	return (
		<>
			{/* Header */}
			{
				<Header onBackPressed={() => history.goBack()}/>
				// <div className="self-stretch min-h-18px"/>
			}

			<div className="self-stretch w-full h-full relative ">
				
				<div className="flex flex-col items-stretch">

					<div className="h-4/6 p-4 flex flex-col gap-2 justify-center items-center">
						
						<VibrationSvg className="-my-16 overflow-visible"/>

						<h3 className="text-white text-center text-[28px] font-bold tracking-wide">
							Do you feel the Bybit Moon Pillow vibrating?
						</h3>
						
						<p className="text-white opacity-80 text-base text-center">
							Now you can sleep your way to the moon!
						</p>

					</div>
					
					<div className="h-2/6 p-4 pb-30px flex flex-col gap-7 justify-center items-center">
						<YellowButton onClick={() => history.push('/vibration-success')}>
							Yes
						</YellowButton>

						<button className="flex justify-center items-center" onClick={onClick}>
							<RefreshSvg className="mx-2" />
							<span className="text-14 text-primary_yellow font-medium tracking-wider">
								Try again
							</span>
						</button>
					</div>
					
				</div>

			</div>

		</>
	)
}

export default TestVibration