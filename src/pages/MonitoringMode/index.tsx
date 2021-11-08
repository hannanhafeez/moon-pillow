import { ReactComponent as MonitoringSvg } from '../../assets/svg/monitoring-mode-graphic.svg'

import { useHistory } from 'react-router'
import Header from '../../components/Header'

const MonitoringMode = () => {
	const history = useHistory()
	
	return (
		<>
			{/* Header */}
			<Header/>

			<div className="self-stretch w-full h-full relative">
				
				<div className="flex flex-col items-stretch py-30px">

					<div className="px-4 flex flex-col gap-2 justify-center items-center">
						
						<div className="overflow-visible">
							<MonitoringSvg className="-my-10 overflow-visible"/>
						</div>
							

						<h3 className="text-white text-center text-[28px] font-bold tracking-wide">
							Switch to ”ON” mode
						</h3>
						
						<p className="text-white opacity-80 text-base text-center">
							Remember to switch to "ON" mode
							to get notifications. You will hear a single
							beep in "ON" mode, and two beeps in "SETTINGS" mode.
						</p>

						<button onClick={() => history.replace('/')}
							className="w-full p-3 font-medium text-base rounded-md text-black bg-primary_yellow hover:bg-yellow-400 mt-4"
						>
							Back to home
						</button>
					</div>
					

				</div>

			</div>

		</>
	)
}

export default MonitoringMode