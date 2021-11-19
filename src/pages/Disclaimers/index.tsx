import { useHistory } from 'react-router'
import RightArrow from '../../components/svg/RightArrow'

import Header from '../../components/Header'

const Disclaimers = () => {
	const history = useHistory()
	const data = [
		"The Bybit Moon Pillow is a novelty item and should not be relied upon for serious trading.",
		"The Bybit Moon Pillow is not for resale.",
		"The quality of your Wi-Fi connection may impact your use of the Bybit Moon Pillow, and there may be delays in getting data from servers.",
		"The Bybit Moon Pillow uses a battery source that may be a potential fire hazard.",
		"If choosing to power the Bybit Moon Pillow with a power bank (not supplied), the alkaline batteries must first be removed from the Bybit Moon Pillow. Ensure the power bank is not covered with any clothing, bedding, or by any other material where heat dissipation may be affected.",
		"Please keep the Bybit Moon Pillow away from heat and direct sunlight.",
		"Do not disassemble the Bybit Moon Pillow.",
		"Please keep the Bybit Moon Pillow and all parts away from children.",
		"Bybit is not responsible for any errors or omissions, or for the results obtained from the use of the Bybit Moon Pillow which is provided on an 'as is' basis without warranty or guarantee of any kind. Bybit disclaims all warranties, express, implied or statutory, with respect to the Bybit Moon Pillow. ",
		"Under no circumstance will Bybit, its affiliates, and their respective shareholders, officers, employees, agents and assigns, and all those acting under the authority of all or any of the foregoing (including advertisers) be responsible or liable for any direct, indirect, special or consequential loss or damage suffered by you or any person arising from use of the Bybit Moon Pillow, whether based on contract, tort or any other legal theory."
	]

	return (
		<>

			{/* Header */}
			<Header onBackPressed={() => history.goBack()} />
			
			<div className="min-h-30px" />

			<div className="self-stretch px-4">
				<h4 className="text-white text-28 leading-8 font-bold">
					Product Warnings and Disclaimers
				</h4>
			</div>

			<div className="min-h-30px" />

			<div className="h-auto self-stretch flex flex-col items-stretch">
				<ol type="1" className="list-decimal flex flex-col gap-30px pr-4 pl-10">
					{
						data.map((para, ind)=>(
							<li key={`${para.length}-${ind}`} className="text-white font-base">
								{para}
							</li>
						))
					}
				</ol>
				
			</div>
			

		</>
	)
}

export default Disclaimers