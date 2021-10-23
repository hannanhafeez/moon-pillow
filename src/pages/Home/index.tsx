import LogoImg from '../../assets/img/Logo@2x.png'
import CoinListItem, { CoinListItemProps } from '../../components/CoinListItem'

import {ReactComponent as VirationSvg} from '../../assets/svg/vibration.svg'
import {ReactComponent as LegalSvg} from '../../assets/svg/legal.svg'

const Home = () => {
	const length = coins.length
	return (
		<>
					
			<div className="my-4 grid gap-2">
				<img src={LogoImg} width={136} alt="Logo"/>
				<h3 className="text-primary_yellow text-center font-bold uppercase tracking-widest">
					Moon Pillow
				</h3>
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

			<div className="self-stretch px-4 my-4">
				<button className={
						"w-full p-4 font-medium text-base rounded-md "
						+ 
						(
							length===0 
							? " bg-primary_yellow hover:bg-yellow-500"
							: " text-white border border-white hover:opacity-70"
						)
					}
				>
					{length===0 && 'Add Crypto'}
					{(length>0 && length<3) && 'Add/Edit Crypto'}
					{(length>=3) && 'Edit Crypto'}
				</button>
			</div>

			{/* <div className="self-stretch min-h-[100px]" /> */}

			<div className={
					"w-full bg-black sticky bottom-0 p-4 grid grid-cols-2 divide-x divide-gray-500 " +
					"text-center text-14 text-primary_yellow font-medium tracking-wider"
				}
			>
				<a href="#" className="flex justify-center items-center">
					<VirationSvg className="mx-2"/>
					Test vibration
				</a>
				
				<a href="#" className="flex justify-center items-center">
					<LegalSvg className="mx-2" />
					Legal and Safety
				</a>
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
