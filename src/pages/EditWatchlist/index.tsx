import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CoinListItem, { CoinListItemProps } from '../../components/CoinListItem'

import {ReactComponent as TrashSvg} from '../../assets/svg/trash.svg'
import {ReactComponent as CancelSvg} from '../../assets/svg/cancel.svg'
import Alert from "../../components/Alert";


import PercentageCheckBox from '../../components/PercentageCheckBox'
import CoinListHeader from '../../components/CoinListHeader'
import Header from '../../components/Header'
import YellowButton from '../../components/YellowButton'
import { useHistory } from 'react-router'
import { useQuery } from 'react-query'
import { GET_COINS } from '../../services/ServiceUrl'
import { useSelectedCoins } from '../../hooks/useSelectedCoins'
import { CoinNamesObject, CoinShortName } from '../../hooks/hooks.d'

const EditWatchlist = () => {
	const history = useHistory()
	const [isOpen, setIsOpen] = useState(false)

	const { data:coinsList } = useQuery(GET_COINS.name, ()=>{
			return fetch(GET_COINS.url)
					.then(res=>res.json())
					.catch(rejected=>console.log(rejected))
		},
		{
			useErrorBoundary: true,
			retryDelay: 5 * 1000,
			refetchInterval: 15 * 1000
		}
	)

	const { selectedCoins, selectedList } = useSelectedCoins()

	const allCoins = (coinsList as {name: string, id: string}[])?.
							map((coin)=>({name: coin.name, alias: coin.id} as CoinListItemProps))

	const [selected, setSelected] = useState(selectedCoins);
	
	const selectedLength = selected?.length

	const [selectedForModal, setSelectedForModal] = useState<undefined|CoinListItemProps>();

	const selectItem = (item: CoinListItemProps)=>{
		setSelectedForModal(item);
		openModal()
	}
	
	const addItem = (alias: CoinShortName) => {
		const itemToAdd = { alias, name: CoinNamesObject[alias], is3Percent: false, is5Percent: false }
		setSelectedForModal(itemToAdd);
		setSelected(oldSelected=>([...oldSelected,itemToAdd]))
		openModal();
	}
	const editItem = (editCheck: 3|5, editValue: boolean, alias: CoinShortName) => {
		
		setSelected(oldSelected=>{
			return oldSelected.map(item=>{
				return alias === item.alias 
				? {
					...item, 
					is3Percent: editCheck === 3 ? editValue : item.is3Percent, 
					is5Percent: editCheck === 5 ? editValue : item.is5Percent
				} 
				: item
			})
			// .filter(((item => (!(item.alias === alias && !(item.is3Percent || item.is5Percent))))))
		})
		setSelectedForModal(item => ({
			...item!,
			is3Percent: editCheck === 3 ? editValue : item!.is3Percent ?? false,
			is5Percent: editCheck === 5 ? editValue : item!.is5Percent ?? false
		}))

		// setSelectedForModal(edited);
		// openModal();
	}
	const removeItem = (alias: CoinShortName) => {
		setSelected(oldSelected=>oldSelected.filter(item=>item.alias !== alias))
		closeModal()
	}

	const onDonePressed = (alias: CoinShortName) =>{
		setSelected(oldSelected => {
			return oldSelected.filter(((item => (!(item.alias === alias && !(item.is3Percent || item.is5Percent))))))
		})
		closeModal()
	}


	const closeModal = ()=> setIsOpen(false)
	const openModal = ()=> setIsOpen(true)
	
	return (
		<>
			<Header onBackPressed={()=>history.goBack()}/>

			<div className="self-stretch min-h-30px"/>

			<div className="self-stretch flex flex-col gap-30px">
				<div className="self-stretch px-4 grid gap-2.5 text-white">
					<h1 className="font-bold text-28 leading-7 tracking-wide">
						{selectedLength !== 0 ? 'Edit Watchlist' : 'Select crypto to watch'}
					</h1>
					<p className="text-gray-400 font-base leading-5">Choose up to a maximum of 3 crypto to add to your Watchlist.</p>
				</div>
				
				{
					(selectedLength !== 0) &&
					<div className="self-stretch px-4">
						<h4 className="text-primary_yellow text-base mb-4 ">
							Watchlist:
						</h4>
		
						<div className="grid grid-flow-row gap-4">
							{
								selected?.map((item, ind)=>(
									<CoinListItem key={`${item.alias}-${ind}`}  
										{...item} isTypeEdit={true}
										onButtonPressed={()=>selectItem(item)}
									/>
								))
							}
						</div>

					</div>
				}

				<div className="self-stretch px-4">
					{
						(selectedLength !== 0) &&
						<h4 className="text-primary_yellow text-base mb-4 ">
							Other crypto:
						</h4>
					}
					
					<div className="grid grid-flow-row gap-4">
						{
							allCoins
								?.filter((coin) => !selected.some(i=>coin.alias===i.alias))
								.map((item, ind) => (
									<CoinListItem key={`${item.alias}-${ind}`} disabled={selectedLength >=3}
									{...item} onButtonPressed={()=>addItem(item.alias)}
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
									<CoinListHeader alias={selectedForModal?.alias} name={selectedForModal?.name} 
										picture={`${window.location.origin}/img/${selectedForModal?.alias}.png`} 
									/>
								</div>

								<div className="my-5">
									<p className="text-base text-white opacity-70">
										Receive a notification when the price changes by a certain percentage.
									</p>
								</div>

								<div className="grid gap-5">
									{/* Checkbox 1 */}
									<PercentageCheckBox name="for5" id="for5" is3Percent={false} defaultChecked={selectedForModal?.is5Percent}
										onChange={(val)=>{editItem(5, val ,selectedForModal!.alias)}}
									/>
									
									{/* Checkbox 2 */}
									<PercentageCheckBox name="for3" id="for3" is3Percent={true} defaultChecked={selectedForModal?.is3Percent}
										onChange={(val)=>{editItem(3, val ,selectedForModal!.alias)}}
									/>
								</div>

								<div className="mt-5">

									<YellowButton onClick={()=>onDonePressed(selectedForModal!.alias)}>
										Done
									</YellowButton>

								</div>

								{
									selectedCoins.some((val=> selectedForModal?.alias === val.alias)) && 
									<div className="mt-6 grid place-content-center">
										<button className="flex justify-center items-center text-primary_yellow" 
											onClick={()=>removeItem(selectedForModal!.alias)}
										>
											<TrashSvg className="mx-2 h-4 w-4" />
											<span className="font-medium text-base leading-4">Remove from your Watchlist</span>
										</button>
									</div>
								}
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

			<div className="self-stretch flex flex-col gap-4 items-stretch sticky bottom-0 right-0 left-0">
				{/* <div className="px-4">
					<Alert />
				</div> */}


				<div className="bg-primary_blue p-4 pb-8 -mb-8">
					<button className="bg-primary_yellow py-2.5 px-8 rounded font-medium font-base float-right">
						Save
					</button>
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
