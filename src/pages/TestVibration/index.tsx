import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { ReactComponent as RefreshSvg } from '../../assets/svg/refresh.svg'
import { ReactComponent as VibrationSvg } from '../../assets/svg/vibration-graphic.svg'
import { ReactComponent as CancelSvg } from '../../assets/svg/cancel.svg'

import { useHistory } from 'react-router'
import Header from '../../components/Header'
import YellowButton from '../../components/YellowButton'
import { useErrorMessage } from '../../hooks/useErrorMessage'
import { GET_LANDING_STATUS, SEND_VIBRATE } from '../../services/ServiceUrl'
import React from 'react'
import { useQueryClient } from 'react-query'
import { LandingStatus } from '../../hooks/useLandingStatus'

const TestVibration = () => {
	const history = useHistory()
	const [isOpen, setIsOpen] = useState(false)
	const [vibratePressed, setVibratePressed] = useState(false)
	const {error, resetMessage, setError} = useErrorMessage()
	const queryClient = useQueryClient();

	const landingData = queryClient.getQueryData<LandingStatus|undefined>(GET_LANDING_STATUS.name);
	const landing = landingData?.landing
	
	const onClick = React.useCallback(() => {
		vibratePressed && openModal()
		setVibratePressed(true);
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
	}, [vibratePressed])

	const closeModal = ()=> setIsOpen(false)
	const openModal = ()=> setIsOpen(true)

	return (
		<>
			{/* Header */}
			{
				landing ?
				<Header onBackPressed={() => history.goBack()}/>
				: <div className="self-stretch min-h-18px"/>
			}

			<div className="self-stretch w-full h-full relative ">
				
				<div className="flex flex-col items-stretch">

					<div className="h-4/6 p-4 flex flex-col gap-2 justify-center items-center">
						
						<VibrationSvg className="-my-16 overflow-visible"/>

						<h3 className="text-white text-center text-[28px] font-bold tracking-wide">
							Do you feel the Bybit Moon Pillow vibrating?
						</h3>
						
						<p className="text-white opacity-80 text-base text-center">
							This lets you know that it's working!
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
									className="text-20 font-bold leading-6 text-white mt-1"
								>
									Oops, something went wrong
								</Dialog.Title>

								
								<div className="my-5">
									<p className="text-base text-white">
										Place your hand on the Bybit Moon PIllow to check that the vibration alert is working.
									</p>
									<br/>
									<p className="text-base text-white">
										If it isn't working, email us at {" "}
										<span className="text-primary_yellow font-bold">support@bybit.com</span>
										{" "}and we'll send help your way!
									</p>
								</div>

								
								<div className="absolute top-3 right-3">
									<button onClick={() => closeModal()}>
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

export default TestVibration