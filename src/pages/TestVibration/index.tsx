import { ReactComponent as BackSvg } from '../../assets/svg/chevron-left.svg'
import { ReactComponent as RefreshSvg } from '../../assets/svg/refresh.svg'
import { ReactComponent as VibrationSvg } from '../../assets/svg/vibration-graphic.svg'

import { useHistory } from 'react-router'
import Header from '../../components/Header'

const TestVibration = () => {
	const history = useHistory()

	return (
		<>
			{/* Header */}
			<Header/>

			<div className="self-stretch w-full h-full relative ">
				
				<div className="flex flex-col items-stretch">

					<div className="h-4/6 p-4 flex flex-col gap-2 justify-center items-center">
						
						<VibrationSvg className="-my-16 overflow-visible"/>

						<h3 className="text-white text-center text-[28px] font-bold tracking-wide">
							Do you feel the Bybit Moon Pillow vibrating?
						</h3>
						
						<p className="text-white opacity-80 text-base text-center">
							Now you can sleep your way to the moon!
						</p>

					</div>
					
					<div className="h-2/6 p-4 pb-30px flex flex-col gap-7 justify-center items-center">
						<button onClick={() => history.push('/vibration-success')}
							className="w-full p-3 font-medium text-base rounded-md text-black bg-primary_yellow hover:bg-yellow-400"
						>
							Yes
						</button>

						<a href="#" className="flex justify-center items-center">
							<RefreshSvg className="mx-2" />
							<span className="text-14 text-primary_yellow font-medium tracking-wider">
								Try again
							</span>
						</a>
					</div>
					
				</div>

			</div>

		</>
	)
}

export default TestVibration