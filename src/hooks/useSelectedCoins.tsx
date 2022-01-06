import { useQuery } from "react-query"
import { CoinListItemProps } from "../components/CoinListItem"
import { GET_TRIGGERS } from "../services/ServiceUrl"
import { CoinShortName, CoinNamesObject } from "./hooks.d"

export type SelectedCoinsObject = {
	[key: string]: {
		is3: boolean,
		is5: boolean
	}
}

export const useSelectedCoins = () => {
	const { data: selectedList, ...everyThingElse } = useQuery(GET_TRIGGERS.name, () => {
		return fetch(GET_TRIGGERS.url)
			.then(res => res.json())
			.then(res => { console.log(res); return res})
			.catch(rejected => console.log(rejected))
	},
		{
			useErrorBoundary: true,
			retryDelay: 5 * 1000,
			refetchInterval: 15 * 1000
		}
	)

	const selectedCoins:CoinListItemProps[] = Object.keys((selectedList as SelectedCoinsObject) ?? {}).map((coin) => {
		return {
			alias: coin, name: CoinNamesObject[coin as CoinShortName],
			is3Percent: (selectedList as SelectedCoinsObject)?.[coin].is3,
			is5Percent: (selectedList as SelectedCoinsObject)?.[coin].is5,
		} as CoinListItemProps
	})

	return {
		selectedList, selectedCoins,
		...everyThingElse
	}
}