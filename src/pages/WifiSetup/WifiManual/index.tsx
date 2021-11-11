import { useHistory } from 'react-router'
import Header from '../../../components/Header'
import MaterialInput from '../../../components/MaterialInput'

const WifiManual = () => {
	const history = useHistory()
	
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

					<MaterialInput placeholder="Network Name" name="network-name" type="text" />

					<MaterialInput placeholder="Username" name="username" type="text" />
					
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
					
					<MaterialInput placeholder="Password" name="password" type="password"/>
					
				</div>
				
				<div className="self-stretch ">
					<button onClick={() => history.push('/wifi-connecting')}
						className="w-full p-3 font-medium text-base rounded text-black bg-primary_yellow"
					>
						Connect
					</button>
				</div>

			</div>

		</>
	)
}

export default WifiManual