import { ReactComponent as AddImg } from '../../assets/svg/add.svg'
import { ReactComponent as EditImg } from '../../assets/svg/edit.svg'
import { CoinShortName } from '../../hooks/hooks'

export type CoinListItemProps = {
	alias: CoinShortName; 
	name: string;
	disabled?: boolean;
	is3Percent?: boolean;
	is5Percent?: boolean;
	isTypeEdit?: boolean;		// Tells if the right button is edit button or add button
	isEditable?: boolean;		// Tells if the row is just showing data or can be edited
	onButtonPressed? : ()=>void;
}

const CoinListItem : React.FC<CoinListItemProps> = (props) => {
	const {
		alias, name, disabled=false,
		is3Percent, is5Percent, 
		isTypeEdit = false, isEditable=true,
		onButtonPressed 
	} = props
 	return (
		<div className="flex items-center p-3 bg-secondary_dark rounded-lg">
			<div className="h-10 w-10 grid place-content-center rounded-full overflow-hidden p-0.5">
				<img className="w-full h-full rounded-full"
					  src={`${window.location.origin}/img/${alias}.png`} alt={`${alias}.png`}
				/>
			</div>

			<div className="mx-2 flex-1">
				<h4 className="text-white font-bold text-base">{alias}</h4>
				<p className="text-gray-400 text-12 leading-3 mb-1">{name}</p>
				{is5Percent && <p className="text-white text-12">5% up or down within the last hour</p>}
				{is3Percent && <p className="text-white text-12">3% up or down within the last 5 mins</p>}
			</div>

			{
				isEditable && 
				<button className={"flex items-center gap-2 py-3 " + (disabled ? "cursor-not-allowed" :"")} 
					onClick={()=> !disabled && onButtonPressed?.()}
				>
					  {isTypeEdit ? <EditImg className={svgStyle(disabled)} /> : <AddImg className={svgStyle(disabled)}/>}
					  <span className={`${disabled ? 'text-gray-600' : 'text-primary_yellow'} font-medium text-14`}>{isTypeEdit? 'Edit' : 'Add'}</span>
				</button>
			}
		</div>
	)
}

export default CoinListItem

const svgStyle = (disabled?: boolean) => `fill-current ${disabled ? 'text-gray-600' : 'text-primary_yellow'}`