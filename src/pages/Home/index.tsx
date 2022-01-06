import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import LogoImg from '../../assets/img/Logo@2x.png'
import CoinListItem, { CoinListItemProps } from '../../components/CoinListItem'

import {ReactComponent as VirationSvg} from '../../assets/svg/vibration.svg'
import {ReactComponent as LegalSvg} from '../../assets/svg/legal.svg'
import {ReactComponent as WifiSvg} from '../../assets/svg/wifi.svg'
import {ReactComponent as EditSvg} from '../../assets/svg/edit.svg'
import { useQueryClient } from 'react-query'
import { WIFI_STATUS } from '../../services/ServiceUrl'
import { useSelectedCoins } from '../../hooks/useSelectedCoins'
import { ErrorMessageState, useErrorMessage } from '../../hooks/useErrorMessage'
import Alert from '../../components/Alert'

const notInRange = "WiFi is not in range";
const notAnswering = "WiFi is not answering";

const DEFAULT_ERROR_MESSAGE = "Unable to connect to Wi-Fi, try reconnecting your Wi-Fi again to connect to your pillow."

const Home = () => {
	const history = useHistory();
	const queryClient = useQueryClient()

	const data:any = queryClient.getQueryData(WIFI_STATUS.name)

	const {selectedCoins, selectedList} = useSelectedCoins()

	const { error, showMessageForTime, resetMessage, setError } = useErrorMessage()
	
	console.log({ selectedCoins, selectedList});
	
	const length = selectedCoins.length

	useEffect(() => {
		if (data?.reason === "") {
			resetMessage()
		} else {
			const reason = data?.reason ?? "";
			const message = (reason === notInRange || reason === notAnswering) ? DEFAULT_ERROR_MESSAGE : reason;
			setError({ message: message, shown: true })
		}
		// data?.connected && history.replace('/')
	}, [data, data?.reason])

	const onEditPressed = () => history.push('/edit')

	return (
		<>

			<div className="my-4 grid gap-1">
				<img src={LogoImg} width={136} alt="Logo"/>
				<h3 className="text-primary_yellow text-center font-bold uppercase tracking-widest">
					Moon Pillow
				</h3>
			</div>

			<div className="self-stretch px-4">

				<div className='my-4'>
					{
						(error as ErrorMessageState).shown &&
						<Alert message={(error as ErrorMessageState).message} danger />
					}
				</div>



				<div className="flex items-center justify-center px-3 py-1 bg-secondary_dark rounded-lg">
					{
						data?.connected ? 
						<>
							<div className="h-8 w-8 grid place-content-center p-[1px]">
								<WifiSvg className="w-5 h-5 fill-current text-primary_yellow"/>
							</div>

							<div className="mx-2 flex-1">
								<h4 className="text-white font-bold text-base">
									{data?.ssid ?? 'Wifi Name'}
								</h4>
							</div>

							<button className="flex items-center gap-2 py-3" onClick={() => history.push('/wifi')}>
								<EditSvg className="fill-current text-primary_yellow"/>
								<span className="text-primary_yellow font-medium text-14">Edit</span>
							</button>
						</>
						:
						<button className='flex items-center justify-center w-full py-2 -my-1' 
							onClick={() => history.push('/wifi')}
						>
								<div className="h-8 w-8 grid place-content-center p-[1px]">
									<WifiSvg className="w-5 h-5 fill-current text-primary_yellow" />
								</div>

								<div className="mx-2">
									<h4 className="text-primary_yellow font-bold text-base">
										{'Connect to Wi-Fi'}
									</h4>
								</div>
						</button>
					}
					
				</div>
			</div>
			
			<div className="self-stretch px-4 my-4">
				<h4 className="text-primary_yellow text-base mb-4 ">
					Watchlist:
				</h4>

				<div className="grid grid-flow-row gap-4">
					{
						length === 0 
						? 
						<p className="text-center mt-5 px-10 text-white">You have not added any crypto to your Watchlist.</p>
						:
						selectedCoins.slice(0,3).map((item, ind)=>(
							<CoinListItem key={`${item.alias}-${ind}`}  
								{...item} isTypeEdit={true} 
								isEditable={false}
							/>
						))
					}
				</div>

			</div>

			<div className="self-stretch px-4 my-2">
				<button className={
						"w-full p-3 font-medium text-base rounded-md "
						+ 
						(
							length===0 
							? " bg-primary_yellow focus:bg-primary_yellow_hover"
							: " text-white border border-white focus:bg-primary_white_hover"
						)
					}
					onClick={onEditPressed}
				>
					{length===0 && 'Add Crypto'}
					{(length>0 && length<3) && 'Add/Edit Crypto'}
					{(length>=3) && 'Edit Crypto'}
				</button>
			</div>

			<div className="self-stretch flex-1" />

			<div className={
					"w-full bg-black sticky -bottom-8 p-4 grid grid-cols-2 divide-x divide-gray-500 " +
					"text-center text-14 text-primary_yellow font-medium tracking-wider"
				}
			>
				<Link to="/vibration" className="flex justify-center items-center">
					<VirationSvg className="mx-2"/>
					Test vibration
				</Link>
				
				<Link to="/legal" className="flex justify-center items-center">
					<LegalSvg className="mx-2" />
					Legal and Safety
				</Link>
			</div>

		</>
	)
}

export default Home

const coins: CoinListItemProps[] = []