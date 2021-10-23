import LogoImg from '../../assets/img/Logo@2x.png'
import CoinListItem, { CoinListItemProps } from '../../components/CoinListItem'

const EditWatchlist = () => {
	const length = coins.length
	return (
		<>
					
			<div className="self-stretch px-4 my-8 grid gap-1 text-white">
				<h1 className="font-bold text-[28px] tracking-wide">Edit Watchlist</h1>
				<p className="text-gray-400">Choose up to a maximum of 3 crypto to add to your Watchlist.</p>
			</div>
			
			<div className="self-stretch px-4 mb-4">
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
								// isEditable={false}
							/>
						))
					}
				</div>

			</div>

			<div className="self-stretch px-4 my-4">
				<h4 className="text-primary_yellow text-base mb-2 ">
					Other crypto:
				</h4>
				
				<div className="grid grid-flow-row gap-2">
					{
						coins.map((item, ind) => (
							<CoinListItem key={`${item.alias}-${ind}`}
								{...item}
							/>
						))
					}
				</div>


			</div>

		</>
	)
}

export default EditWatchlist

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
