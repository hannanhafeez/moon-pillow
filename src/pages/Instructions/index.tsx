import { useHistory } from 'react-router'
import RightArrow from '../../components/svg/RightArrow'

import Header from '../../components/Header'

const Instructions = () => {
	const history = useHistory()

	return (
		<>

			{/* Header */}
			<Header onBackPressed={() => history.goBack()} />
			
			<div className="min-h-30px"/>

			<div className="self-stretch px-4">
				<h4 className="text-white text-28 leading-8 font-bold">
					Instructions
				</h4>
			</div>
			
			<div className="min-h-30px" />

			<div className="h-auto self-stretch flex flex-col items-stretch gap-30px px-4">
				<p className="text-white font-base">
					Please do not dispose of the Instructions Card inside the Packaging box.
				</p>

				<img src={`${window.location.origin}/img/instruct.svg`} alt={'instruction.svg'}
					className="h-auto w-full"
				/>
			</div>
			
		</>
	)
}

export default Instructions