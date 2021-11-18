import Tick from '../svg/Tick'

export type PercentageCheckBoxProps = {
	is3Percent?: boolean,
	defaultChecked?: boolean,
	name?: string, id?:string,
	onChange?:(currentVal:boolean)=>void
}

const PercentageCheckBox: React.FC<PercentageCheckBoxProps> = ({
	is3Percent = true, defaultChecked=false,
	name, id, onChange
}) => {
	return (
		<div className="px-4 py-2.5 bg-secondary_light rounded-md flex items-center gap-2" >
			<input type="checkbox" id={id} name={name} value="yes" className="opacity-0 absolute h-8 w-8" 
				defaultChecked={defaultChecked}
				onChange={e =>onChange?.(e.target.checked)}
			/>
			<div className="bg-modal_color border-2 rounded border-transparent w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ">
				<Tick/>
			</div>
			<label htmlFor={id} className="select-none w-full">
				<span className="inline-block w-full">
					<h4 className="text-primary_yellow text-base font-bold leading-[21px]">{`${(is3Percent? 3 : 5)}%`}</h4>
					<p className="text-white leading-4 text-14">up or down
						<span className="text-white opacity-70"> within the {is3Percent ? 'last 5 min':'last hour'}</span>
					</p>
				</span>
			</label>
		</div>
	)
}

export default PercentageCheckBox;