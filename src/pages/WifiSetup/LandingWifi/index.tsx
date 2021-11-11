import { ReactComponent as LegalSvg } from '../../../assets/svg/legal.svg'
import LogoImg from '../../../assets/img/Logo@2x.png'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import YellowButton from '../../../components/YellowButton'

const LandingWifi = () => {
	const history = useHistory()

	return (
		<>
			<div className="self-stretch w-full h-screen -my-30px relative overflow-hidden">
				<img alt="bg" src={'/img/bg.png'} className="absolute w-full opacity-50 bg-contain"/>
				
				<div className="absolute py-8 top-0 left-0 right-0 bottom-0 flex flex-col items-stretch overflow-y-scroll">

					<div className="h-4/6 px-4 flex flex-col gap-30px justify-center items-center">
						
						<div className="flex flex-col gap-30px items-center">
							<img src={LogoImg} width={136} alt="Logo" />
							<h3 className="text-primary_yellow text-center text-14 font-black uppercase tracking-widest">
								Zzz to the moon!
							</h3>
						</div>

						<p className="text-white text-base text-center">
							Up all night worrying about your crypto? <br/> The Bybit Moon Pillow alerts you on market movements so you can sleep your way to the moon.
						</p>

						<YellowButton onClick={() => history.push('/connect-wifi')}>
							Connect
						</YellowButton>

					</div>
					
					<div className="min-h-2/6 pt-4 px-4 flex flex-col gap-5 justify-center items-center">
						<Link to="/legal" className="flex justify-center items-center">
							<LegalSvg className="mx-2" />
							<span className="text-14 leading-3 text-primary_yellow font-medium tracking-wide">
								Legal and Safety
							</span>
						</Link>

						<p className="text-gray-300 text-[13px] text-center">
							Disclaimer: This is a novelty item. Bybit is not responsible for any errors or omissions, or for the results obtained from the use of the Bybit Moon Pillow which is provided on an 'as is' basis without warranty or guarantee of any kind. Bybit disclaims all warranties, express, implied or statutory, with respect to the Bybit Moon Pillow.
						</p>
					</div>
					
				</div>

			</div>

		</>
	)
}

export default LandingWifi