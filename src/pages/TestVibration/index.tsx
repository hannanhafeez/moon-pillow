import { ReactComponent as BackSvg } from '../../assets/svg/chevron-left.svg'
import { ReactComponent as RefreshSvg } from '../../assets/svg/refresh.svg'
import { ReactComponent as VibrationSvg } from '../../assets/svg/vibration-graphic.svg'

import { useHistory } from 'react-router'

const TestVibration = () => {
	const history = useHistory()

	return (
		<>
			{/* Header */}
			<div className="self-stretch px-4">
				<button className="py-4 grid grid-flow-col justify-start items-center gap-1" onClick={() => history.goBack()}>
					<BackSvg />
					<p className="text-primary_yellow text-center text-14 font-medium uppercase tracking-widest">
						Back
					</p>
				</button>
			</div>

			<div className="self-stretch w-full h-full relative overflow-hidden">
				
				<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-stretch">

					<div className="h-4/6 p-4 flex flex-col gap-2 justify-center items-center">
						
						<VibrationSvg className="my-[-20px]"/>

						<h3 className="text-white text-center text-[28px] font-bold tracking-wide">
							Do you feel the Bybit Moon Pillow vibrating?
						</h3>
						
						<p className="text-white opacity-80 text-base text-center">
							Now you can sleep your way to the moon!
						</p>

					</div>
					
					<div className="h-2/6 p-4 flex flex-col gap-4 justify-center items-center">
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