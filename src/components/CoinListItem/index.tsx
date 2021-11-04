import { ReactComponent as AddImg } from '../../assets/svg/add.svg'
import { ReactComponent as EditImg } from '../../assets/svg/edit.svg'

export type CoinListItemProps = {
	alias: string; 
	name: string;
	picture?: string;
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
		is3Percent, is5Percent, picture, 
		isTypeEdit = false, isEditable=true,
		onButtonPressed 
	} = props
 	return (
		<div className="flex items-center p-3 bg-secondary_dark rounded-lg">
			<div className="h-10 w-10 rounded-full overflow-hidden bg-gray-800 p-[1px]">
				<img className="rounded-full"
					src={picture} alt="img"
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
				<button className="flex items-center gap-2 py-3" onClick={onButtonPressed}>
					  {isTypeEdit ? <EditImg className={svgStyle(disabled)} /> : <AddImg className={svgStyle(disabled)}/>}
					  <span className={`${disabled ? 'text-gray-600' : 'text-primary_yellow'} font-medium text-14`}>{isTypeEdit? 'Edit' : 'Add'}</span>
				</button>
			}
		</div>
	)
}

export default CoinListItem

const svgStyle = (disabled?: boolean) => `fill-current ${disabled ? 'text-gray-600' : 'text-primary_yellow'}`