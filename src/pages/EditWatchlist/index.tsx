import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CoinListItem from '../../components/CoinListItem'

import {ReactComponent as TrashSvg} from '../../assets/svg/trash.svg'
import {ReactComponent as CancelSvg} from '../../assets/svg/cancel.svg'

import PercentageCheckBox from '../../components/PercentageCheckBox'
import CoinListHeader from '../../components/CoinListHeader'
import Header from '../../components/Header'

const EditWatchlist = () => {
	const [isOpen, setIsOpen] = useState(false)
	const length = coins.length

	const closeModal = ()=> setIsOpen(false)
	const openModal = ()=> setIsOpen(true)
	
	return (
		<>
			<Header />

			<div className="self-stretch">
				<div className="self-stretch my-30px px-4 grid gap-0 text-white">
					<h1 className="font-bold text-28 tracking-wide">Edit Watchlist</h1>
					<p className="text-gray-400">Choose up to a maximum of 3 crypto to add to your Watchlist.</p>
				</div>
				
				<div className="self-stretch px-4 mb-30px">
					<h4 className="text-primary_yellow text-base mb-4 ">
						Watchlist:
					</h4>

					<div className="grid grid-flow-row gap-4">
						{
							length === 0 
							? 
							<p className="text-center mt-5 px-10 text-white">You have not added any crypto to your Watchlist.</p>
							:
							coins.slice(0,3).map((item, ind)=>(
								<CoinListItem key={`${item.alias}-${ind}`}  
									{...item} isTypeEdit={true} is3Percent is5Percent
									// isEditable={false} 
									onButtonPressed={openModal}
								/>
							))
						}
					</div>

				</div>

				<div className="self-stretch px-4 my-30px">
					<h4 className="text-primary_yellow text-base mb-4 ">
						Other crypto:
					</h4>
					
					<div className="grid grid-flow-row gap-4">
						{
							coins.map((item, ind) => (
								<CoinListItem key={`${item.alias}-${ind}`} disabled
									{...item} onButtonPressed={openModal}
								/>
							))
						}
					</div>


				</div>
			</div>

			{/* Modal */}
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={closeModal}
				>
					<div className="min-h-screen px-4 text-center">
						
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="bg-black opacity-70 fixed inset-0" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span aria-hidden="true" className="inline-block h-screen align-middle"> &#8203; </span>

						<Transition.Child as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="font-sans inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-modal_color shadow-xl rounded-md">
								<Dialog.Title as="h3"
									className="text-lg font-bold leading-6 text-white mt-1"
								>
									Select vibration trigger for:
								</Dialog.Title>

								<div className="self-stretch my-5">
									<CoinListHeader alias="BTC" name="Bitcoin" picture="http://daisyui.com/tailwind-css-component-profile-2@56w.png" />
								</div>

								<div className="my-5">
									<p className="text-base text-white opacity-70">
										Receive a notification when the price changes by a certain percentage.
									</p>
								</div>

								<div className="grid gap-5">
									{/* Checkbox 1 */}
									<PercentageCheckBox name="for5" id="for5" is3Percent={false} />
									
									{/* Checkbox 2 */}
									<PercentageCheckBox name="for3" id="for3" is3Percent />
								</div>

								<div className="mt-5">

									<button className={
										"w-full p-4 font-medium text-base rounded-md bg-primary_yellow hover:bg-yellow-500"
									}
										onClick={closeModal}
									>
										Done
									</button>

								</div>

								{/* <div className="mt-6 grid place-content-center">
									<button className="flex justify-center items-center text-primary_yellow">
										<TrashSvg className="mx-2 h-4 w-4" />
										<span className="font-medium text-base leading-4">Remove from your Watchlist</span>
									</button>
								</div> */}
								<div className="absolute top-3 right-3">
									<button onClick={closeModal}>
										<CancelSvg />
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>


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
