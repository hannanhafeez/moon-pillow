export type PercentageCheckBoxProps = {
	is3Percent?: boolean,
	defaultChecked?: boolean
}

const PercentageCheckBox: React.FC<PercentageCheckBoxProps> = ({
	is3Percent = true, defaultChecked=false
}) => {
	return (
		<div className="px-4 py-2 bg-secondary_light rounded-md">
			<label className="flex items-center">
				<input defaultChecked={defaultChecked} className="text-yellow-500 bg-gray-800 w-4 h-4 focus:ring-0 focus:ring-offset-0 rounded" type="checkbox" />
				<span className="inline-block mx-4">
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