import { ReactComponent as BackSvg } from '../../assets/svg/chevron-left.svg'
import { ReactComponent as SleepSvg } from '../../assets/svg/sleep-graphic.svg'
import { ReactComponent as CelebrationSvg } from '../../assets/svg/celebration.svg'

import { useHistory } from 'react-router'
import Header from '../../components/Header'
import YellowButton from '../../components/YellowButton'

const VibrationSuccess = () => {
	const history = useHistory()
	
	return (
		<>
			{/* Header */}
			<Header onBackPressed={() => history.goBack()}/>

			<div className="self-stretch w-full h-full relative">
				
				<div className="flex flex-col items-stretch ">

					<div className="h-4/6 p-4 flex flex-col gap-2 justify-center items-center ">
						
						<SleepSvg className="-my-16 overflow-visible"/>
						{/* <CelebrationSvg className="-my-20 rotate-12"/> */}

						<h3 className="text-white text-center text-[28px] font-bold tracking-wide">
							It's awake!
						</h3>
						
						<p className="text-white opacity-80 text-base text-center">
							Now you can sleep your way to the moon!
						</p>

					</div>
					
					<div className="h-2/6 p-4 pb-30px flex flex-col gap-4 justify-center items-center">
						<YellowButton onClick={() => history.replace('/')}>
							Back to home
						</YellowButton>
					</div>
					
				</div>

			</div>

		</>
	)
}

export default VibrationSuccess