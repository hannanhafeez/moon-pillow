import { useQuery } from "react-query"
import { CoinListItemProps } from "../components/CoinListItem"
import { GET_LANDING_STATUS } from "../services/ServiceUrl"
import { CoinShortName, CoinNamesObject } from "./hooks.d"

export type LandingStatus = {
	vibration: boolean; 
	landing: boolean;
}

export const useLandingStatus = () => {
	const data = useQuery(GET_LANDING_STATUS.name, () => {
		return fetch(GET_LANDING_STATUS.url)
			.then(res => res.json())
			.catch(rejected => console.log(rejected))
	},
		{
			useErrorBoundary: true,
			// retryDelay: 5 * 1000,
			// refetchInterval: 5 * 1000
		}
	)


	return data
}