import LogoImg from '../../assets/img/Logo@2x.png'
import {ReactComponent as AddImg} from '../../assets/svg/add.svg'

const Home = () => {
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
						coins.slice(0,3).map(({alias,name, picture}, ind)=>(

							<div key={`${alias}-${ind}`} className="flex items-center p-3 bg-secondary_dark rounded-lg">
								<div className="h-10 w-10 ">
									<img className="rounded-full" 
										src={picture} alt="img"
									/>
								</div>

								<div className="mx-2 flex-1">
									<h4 className="text-white font-bold text-base">{alias}</h4>
									<p className="text-gray-400 text-12 leading-3 mb-1">{name}</p>
									{/* <p className="text-white text-12">5% up or down within the last hour</p>
									<p className="text-white text-12">3% up or down within the last 5 mins</p> */}
								</div>
								
								<button className="flex items-center gap-2 py-3">
									<AddImg/>
									<span className="text-primary_yellow font-medium text-14">Add</span>
								</button>
							</div>
						))
					}
				</div>

			</div>

			<div className="self-stretch px-4 my-4">
				<h4 className="text-primary_yellow text-base mb-2">
					Watchlist:
				</h4>

				<div className="grid grid-flow-row gap-2">
					{
						coins.map(({alias,name, picture}, ind)=>(

							<div key={`${alias}-${ind}`} className="flex items-center p-3 bg-secondary_dark rounded-lg">
								<div className="h-10 w-10 ">
									<img className="rounded-full" 
										src={picture} alt="img"
									/>
								</div>

								<div className="mx-2 flex-1">
									<h4 className="text-white font-bold text-base">{alias}</h4>
									<p className="text-gray-400 text-12 leading-3 mb-1">{name}</p>
									{/* <p className="text-white text-12">5% up or down within the last hour</p>
									<p className="text-white text-12">3% up or down within the last 5 mins</p> */}
								</div>
								
								<button className="flex items-center gap-2 py-3">
									<AddImg/>
									<span className="text-primary_yellow font-medium text-14">Add</span>
								</button>
							</div>
						))
					}
				</div>

			</div>

		</>
	)
}

export default Home


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
	{
		name: 'Binance Coin',
		alias: 'BNB',
		picture: 'http://daisyui.com/tailwind-css-component-profile-2@56w.png'
	},
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
	{
		name: 'Binance Coin',
		alias: 'BNB',
		picture: 'http://daisyui.com/tailwind-css-component-profile-2@56w.png'
	},
]