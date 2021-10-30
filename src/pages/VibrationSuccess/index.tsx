import { ReactComponent as BackSvg } from '../../assets/svg/chevron-left.svg'
import { ReactComponent as SleepSvg } from '../../assets/svg/sleep-graphic.svg'

import { useHistory } from 'react-router'

const VibrationSuccess = () => {
	const history = useHistory()
	
	return (
		<>
			{/* Header */}
			<div className="self-stretch px-4">
				<button className="py-4 grid grid-flow-col justify-start items-center gap-1" onClick={() => history.replace('/')}>
					<BackSvg />
					<p className="text-primary_yellow text-center text-14 font-medium uppercase tracking-widest">
						Back
					</p>
				</button>
			</div>

			<div className="self-stretch w-full h-full relative overflow-hidden">
				
				<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-stretch">

					<div className="h-4/6 p-4 flex flex-col gap-2 justify-center items-center">
						
						<SleepSvg className="my-[-20px]"/>

						<h3 className="text-white text-center text-[28px] font-bold tracking-wide">
							It's awake!
						</h3>
						
						<p className="text-white opacity-80 text-base text-center">
							Now you can sleep your way to the moon!
						</p>

					</div>
					
					<div className="h-2/6 p-4 flex flex-col gap-4 justify-center items-center">
						<button onClick={() => history.replace('/')}
							className="w-full p-3 font-medium text-base rounded-md text-black bg-primary_yellow hover:bg-yellow-400"
						>
							Back to home
						</button>
					</div>
					
				</div>

			</div>

		</>
	)
}

export default VibrationSuccess