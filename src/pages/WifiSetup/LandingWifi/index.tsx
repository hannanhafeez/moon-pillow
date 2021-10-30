import { ReactComponent as LegalSvg } from '../../../assets/svg/legal.svg'
import BgImg from '../../../assets/img/intro-bg.png'
import LogoImg from '../../../assets/img/Logo@2x.png'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const LandingWifi = () => {
	const history = useHistory()

	return (
		<>
			<div className="self-stretch max-w-full max-h-full relative overflow-hidden">
				<img src={BgImg} className="w-full opacity-50 bg-cover"/>
				
				<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-stretch">

					<div className="h-4/6 p-4 flex flex-col gap-4 justify-center items-center">
						
						<div className="flex flex-col gap-3 items-center">
							<img src={LogoImg} width={136} alt="Logo" />
							<h3 className="text-primary_yellow text-center text-14 font-black uppercase tracking-widest">
								Zzz to the moon!
							</h3>
						</div>

						<p className="text-white text-base text-center">
							Up all night worrying about your crypto? <br/> The Bybit Moon Pillow alerts you on market movements so you can sleep your way to the moon.
						</p>

						<button onClick={() => history.push('/connect-wifi')}
							className="w-full p-3 font-medium text-base rounded-md text-black bg-primary_yellow hover:bg-yellow-400"
						>
							Connect
						</button>

					</div>
					
					<div className="h-2/6 p-4 flex flex-col gap-4 justify-center items-center">
						<Link to="/legal" className="flex justify-center items-center">
							<LegalSvg className="mx-2" />
							<span className="text-14 text-primary_yellow font-medium tracking-wider">
								Legal and Safety
							</span>
						</Link>

						<p className="text-[#ffffffcc] text-[13px] text-center">
							Disclaimer: This is a novelty item. Bybit is not responsible for any errors or omissions, or for the results obtained from the use of the Bybit Moon Pillow which is provided on an 'as is' basis without warranty or guarantee of any kind. Bybit disclaims all warranties, express, implied or statutory, with respect to the Bybit Moon Pillow.
						</p>
					</div>
					
				</div>

			</div>

		</>
	)
}

export default LandingWifi