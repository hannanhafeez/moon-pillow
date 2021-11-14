import { useQuery } from "react-query"
import { WIFI_STATUS } from "../services/ServiceUrl"

export type responseType = {
	connected: boolean;
	ssid: string;
	reason: string;
} | undefined

export const useWifiStatus = () => {
	const queryData = useQuery(WIFI_STATUS.name, (context) => {
		return fetch(WIFI_STATUS.url).then(res => res.json())
	},
		{
			useErrorBoundary: true,
			// retryDelay: 3000,
			refetchInterval: 5 * 1000
		}
	)

	return queryData
}