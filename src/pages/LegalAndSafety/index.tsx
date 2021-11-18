import { useHistory } from 'react-router'
import RightArrow from '../../components/svg/RightArrow'

import Header from '../../components/Header'

const LegalAndSafety = () => {
	const history = useHistory()
	const list = [
		{ name: "Instructions", onClick: () => history.push('/instructions')},
		{ name: "Product Warnings and Disclaimers", onClick: () => history.push('/disclaimers')},
	]

	return (
		<>

			{/* Header */}
			<Header onBackPressed={() => history.goBack()} />
			
			<div className="h-[30px]"/>

			<div className="self-stretch px-4">
				<h4 className="text-white text-28 leading-8 font-bold">
					Legal and safety
				</h4>
				
			</div>
			
			<div className="h-[30px]"/>

			<div className="max-h-full overflow-y-scroll self-stretch flex flex-col items-stretch gap-3 px-4">

				{
					list.map(({name, onClick}, ind)=>(
						<button key={`${name}-${ind}`} className="flex justify-between items-center px-3 py-3 min-h-12 bg-secondary_dark hover:bg-secondary_light rounded-lg"
							onClick={onClick}
						>

							<div className="ml-1">
								<h4 className="text-white text-left font-medium text-base">
									{name}
								</h4>
							</div>
							
							<div className="h-8 w-8 -ml-2 -mr-2 grid place-content-center">
								<RightArrow/>
							</div>
						</button>
					))
				}
			</div>
			

		</>
	)
}

export default LegalAndSafety