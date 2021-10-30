import { ReactComponent as PdfSvg } from '../../assets/svg/pdf.svg'
import {ReactComponent as BackSvg} from '../../assets/svg/chevron-left.svg'


import { useHistory } from 'react-router'

const LegalAndSafety = () => {
	const history = useHistory()
	
	const list = [
		{ name: "Instructions",},
		{ name: "Battery Safety Manual",},
		{ name: "Terms of Use",},
		{ name: "Disclaimer",},
	]

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



			<div className="self-stretch px-4 mb-4">
				<h4 className="text-white text-[28px] font-bold mb-2 ">
					Legal and safety
				</h4>
				
			</div>

			<div className="mb-2 max-h-full overflow-y-scroll self-stretch flex flex-col items-stretch gap-3 px-4">

				{
					list.map(({name}, ind)=>(
						<button key={`${name}-${ind}`} className="flex items-center px-3 py-2 h-12 bg-secondary_dark hover:bg-secondary_light rounded-lg"
							onClick={()=> undefined}
						>	
							<div className="h-8 w-8 grid place-content-center">
								<PdfSvg className="h-5 w-5 fill-current text-primary_yellow " />
							</div>

							<div className="mx-2">
								<h4 className="text-white font-bold text-base">
									{name}
								</h4>
							</div>
						</button>
					))
				}
			</div>
			

		</>
	)
}

export default LegalAndSafety