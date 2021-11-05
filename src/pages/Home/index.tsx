import { Link, useHistory } from 'react-router-dom'

import LogoImg from '../../assets/img/Logo@2x.png'
import CoinListItem from '../../components/CoinListItem'

import {ReactComponent as VirationSvg} from '../../assets/svg/vibration.svg'
import {ReactComponent as LegalSvg} from '../../assets/svg/legal.svg'
import {ReactComponent as WifiSvg} from '../../assets/svg/wifi.svg'
import {ReactComponent as EditSvg} from '../../assets/svg/edit.svg'

const Home = () => {
	const history = useHistory();
	const length = coins.length

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
				<div className="flex items-center px-3 py-1 bg-secondary_dark rounded-lg">
					<div className="h-8 w-8 grid place-content-center p-[1px]">
						<WifiSvg className="w-5 h-5 fill-current text-primary_yellow"/>
					</div>

					<div className="mx-2 flex-1">
						<h4 className="text-white font-bold text-base">{'Wifi Name'}</h4>
					</div>

					<button className="flex items-center gap-2 py-3" onClick={() => history.push('/wifi')}>
						<EditSvg />
						<span className="text-primary_yellow font-medium text-14">Edit</span>
					</button>
					
				</div>
			</div>
			
			<div className="self-stretch px-4 my-4">
				<h4 className="text-primary_yellow text-base mb-2 ">
					Watchlist:
				</h4>

				<div className="grid grid-flow-row gap-2">
					{
						length === 0 
						? 
						<p className="text-center mt-5 px-10 text-white">You have not added any crypto to your Watchlist.</p>
						:
						coins.slice(0,3).map((item, ind)=>(
							<CoinListItem key={`${item.alias}-${ind}`}  
								{...item} isTypeEdit={true} is3Percent is5Percent
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
							? " bg-primary_yellow hover:bg-yellow-500"
							: " text-white border border-white hover:opacity-70"
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
					"w-full bg-black sticky bottom-0 p-4 grid grid-cols-2 divide-x divide-gray-500 " +
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

// const coins: CoinListItemProps[] = []

const coins = [
	{
		name: 'Ethereum',
		alias: 'ETH',
		picture: 'http://daisyui.com/tailwind-css-component-profile-2@56w.png'
	},
	{
		name: 'BitDAO',
		alias: 'BIT',
		picture: 'http://daisyui.com/tailwind-css-component-profile-2@56w.png'
	},
	{
		name: 'Cardano',
		alias: 'ADA',
		picture: 'http://daisyui.com/tailwind-css-component-profile-2@56w.png'
	},
	{
		name: 'Binance Coin',
		alias: 'BNB',
		picture: 'http://daisyui.com/tailwind-css-component-profile-2@56w.png'
	},
]
