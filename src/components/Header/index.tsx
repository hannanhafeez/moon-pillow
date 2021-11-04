import { ReactComponent as BackSvg } from '../../assets/svg/chevron-left.svg'

export type HeaderProps = {
	showBackButton?:boolean,
	onBackPressed?: ()=>void
}

const Header: React.FC<HeaderProps> = ({ showBackButton = true, onBackPressed }) => {
	return (
		<div className="self-stretch px-4">
			<button className="grid grid-flow-col justify-start items-center gap-1" onClick={onBackPressed}>
				<BackSvg className="w-4 h-4 fill-current text-primary_yellow"/>
				<p className="text-primary_yellow text-center text-16 leading-[16px] font-medium">
					Back
				</p>
			</button>
		</div>
	)
}

export default Header
