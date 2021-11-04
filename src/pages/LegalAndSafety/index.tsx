import { ReactComponent as PdfSvg } from '../../assets/svg/pdf.svg'


import { useHistory } from 'react-router'
import Header from '../../components/Header'

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
			<Header/>
			
			<div className="h-[30px]"/>

			<div className="self-stretch px-4">
				<h4 className="text-white text-[28px] leading-[28px] font-bold">
					Legal and safety
				</h4>
				
			</div>
			
			<div className="h-[30px]"/>

			<div className="max-h-full overflow-y-scroll self-stretch flex flex-col items-stretch gap-3 px-4">

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