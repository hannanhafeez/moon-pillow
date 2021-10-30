import { ReactComponent as BackSvg } from '../../assets/svg/chevron-left.svg'
import { ReactComponent as MonitoringSvg } from '../../assets/svg/monitoring-mode-graphic.svg'

import { useHistory } from 'react-router'

const MonitoringMode = () => {
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

					<div className="p-4 flex flex-col gap-2 justify-center items-center">
						
						<MonitoringSvg className="max-h-[70%] my-[-20px]"/>

						<h3 className="text-white text-center text-[28px] font-bold tracking-wide">
							Switch to ”ON” mode
						</h3>
						
						<p className="text-white opacity-80 text-base text-center">
							Remember to switch to "ON" mode
							to get notifications. You will hear a single
							beep in "ON" mode, and two beeps in "SETTINGS" mode.
						</p>

					</div>
					
					
				</div>

			</div>

		</>
	)
}

export default MonitoringMode