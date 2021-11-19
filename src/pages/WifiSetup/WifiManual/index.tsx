import { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Header from '../../../components/Header'
import MaterialInput from '../../../components/MaterialInput'
import YellowButton from '../../../components/YellowButton'
import { useErrorMessage } from '../../../hooks/useErrorMessage'
import { CONNECT_WIFI } from '../../../services/ServiceUrl'

const WifiManual = () => {
	const history = useHistory()
	const location: any = useLocation()

	const [networkName, setNetworkName] = useState('')
	const [pw, setPW] = useState('')
	const { error, showMessageForTime } = useErrorMessage()

	useEffect(() => {
		console.log(location.state);
	}, [])

	const onNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		// console.log(e.target.value);
		setNetworkName(e.target.value)
	}, [])
	const onPassChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		// console.log(e.target.value);
		setPW(e.target.value)
	}, [])
	

	const onClick = () => {
		const data = { ssid: location?.state?.ssid, pass: pw }
		console.log(data);
		// return
		const requestOptions: RequestInit = {
			method: 'POST',
			body: JSON.stringify(data)
		};

		fetch(CONNECT_WIFI.url, requestOptions)
			.then(res => res.text())
			.then(res => {
				if (res === 'ok') {
					history.push('/wifi-connecting', { ssid: networkName })
				} else {
					showMessageForTime('An unknow error occured!', 5000)
				}
			})
			.catch((e) => {
				console.log(e);

				showMessageForTime("An error occured, please try again!", 10000)
			})
	}
	
	return (
		<>

			{/* Header */}
			<Header onBackPressed={() => history.goBack()}/>
			
			<div className="min-h-30px"/>

			<div className="px-4 pb-30px self-stretch flex flex-col items-stretch gap-30px">

				<div className="self-stretch">
					<h4 className="text-white text-28 font-bold ">
						Enter network information
					</h4>
					
				</div>
				
				<div className="self-stretch flex flex-col items-stretch gap-30px">

					<MaterialInput maxLength={30} placeholder="Network Name" name="network-name" type="text"
						onChange={onNameChange}
					/>

					{/* <MaterialInput placeholder="Username" name="username" type="text" /> */}
					
					<div className="self-stretch relative p-3 rounded bg-secondary focus-within:outline-primary_yellow">
						<select name="select-security" defaultValue={undefined} placeholder="Select Security"
							className="block w-full p-0 font-medium text-base rounded bg-secondary border-0 text-white appearance-none outline-none border-none focus:ring-0 bg-transparent"
							style={{width:'102%'}}
						>
							<option value="none">None</option>
							<option value="WPA">WPA</option>
							<option value="WPA2">WPA 2</option>
						</select>
						<label htmlFor="select-security" className="absolute top-3 font-medium text-gray-500 duration-300 origin-0">
							Select Security
						</label>
					</div>
					
					<MaterialInput maxLength={20} type="password" placeholder="Password"
						onChange={onPassChange}
					/>
					
				</div>
				
				<div className="self-stretch ">
					<YellowButton isDisabled={(networkName === "" || pw === '')} onClick={onClick}>
						Connect
					</YellowButton>
				</div>

			</div>

		</>
	)
}

export default WifiManual