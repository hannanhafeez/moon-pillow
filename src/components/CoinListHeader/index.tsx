
export type CoinListHeaderProps = {
	alias?: string;
	name?: string;
	picture?: string;
}

const CoinListHeader: React.FC<CoinListHeaderProps> = ({
	alias='BIT', name="Bit Coin", picture
}) => {
	return (
		<div className="flex items-center bg-secondary_dark rounded-lg">
			<div className="p-[1px]">
				<img src={picture} alt={name}
					className="h-10 w-10 rounded-full overflow-hidden "
				/>
			</div>

			<div className="mx-2 flex-1">
				<h4 className="text-white font-bold text-base">{alias}</h4>
				<p className="text-gray-400 text-12 leading-3 mb-1">
					{name}
				</p>
			</div>
		</div>
	)
}

export default CoinListHeader
