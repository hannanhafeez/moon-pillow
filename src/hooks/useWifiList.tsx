import { useQuery } from "react-query"
import { SCAN_RESULTS } from "../services/ServiceUrl"

export const useWifiList = () => {
	const queryData = useQuery(SCAN_RESULTS.name, (context) => {
		return fetch(SCAN_RESULTS.url).then(res => res.json())
	},
		{
			useErrorBoundary: true,
			// retryDelay: 3000,
			refetchInterval: 10 * 1000
		}
	)

	return queryData
}