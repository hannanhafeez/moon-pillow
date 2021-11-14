import {
	BrowserRouter as Router,
	Switch,
	Route, Redirect
} from "react-router-dom";
import Home from './pages/Home';
import EditWatchlist from "./pages/EditWatchlist";
import SelectWifi from "./pages/WifiSetup/SelectWifi";
import WifiPassword from "./pages/WifiSetup/WifiPassword";
import WifiManual from "./pages/WifiSetup/WifiManual";
import ConnectWifi from "./pages/WifiSetup/ConnectWifi";
import LandingWifi from "./pages/WifiSetup/LandingWifi";
import TestVibration from "./pages/TestVibration";
import VibrationSuccess from "./pages/VibrationSuccess";
import MonitoringMode from "./pages/MonitoringMode";
import LegalAndSafety from "./pages/LegalAndSafety";
import ConnectingWifi from "./pages/WifiSetup/ConnectingWifi";
import Alert from "./components/Alert";

import { useWifiStatus } from "./hooks/useWifiStatus";
import React from "react";

function App() {
	// console.log(WIFI_STATUS);
	
	const { data, error, isError, isLoading } = useWifiStatus()


	const e = !!error

	if (!error){
		console.log({ e, connected: data?.connected, data, isError, isLoading});
	}else{
		console.log({ e, error, isError, isLoading});
	}
	

	return (
		<Router>
			<div className="w-screen h-screen max-h-screen flex justify-center bg-gradient-to-b from-primary_blue overflow-scroll">
				
				<div className={
					"w-full h-full max-w-768 min-h-full max-h-screen flex-1 flex flex-col items-center " + 
					"to-black font-sans" +
					" py-30px overflow-x-hidden"
					}
				>
				{
					(!data && !isLoading)
					?<MonitoringMode/>
					:<Switch >
						<Route exact path="/">
							{data?.connected ? <Home/> : <LandingWifi/>}
						</Route>
						{/* <Route path="/about">
							<About />
						</Route>
						<Route path="/users">
							<Users />
						</Route> */}
					
						<Route exact path="/monitoring-mode">
							<RedirectComponent error={e} >
								<MonitoringMode/>
							</RedirectComponent>
						</Route>
						
						<Route exact path="/vibration">
							<RedirectComponent error={e} >
								<TestVibration/>
							</RedirectComponent>
						</Route>
						<Route exact path="/vibration-success">
							<RedirectComponent error={e} >
								<VibrationSuccess/>
							</RedirectComponent>
						</Route>
						
						<Route exact path="/legal">
							<RedirectComponent error={e} >
								<LegalAndSafety/>
							</RedirectComponent>
						</Route>

						<Route exact path="/edit">
							<RedirectComponent error={e} >
								<EditWatchlist/>
							</RedirectComponent>
						</Route>

							
					
						<Route exact path="/connect-wifi">
							<ConnectWifi />
						</Route>

						<Route exact path="/wifi">
							<SelectWifi />
						</Route>
						<Route exact path="/wifi-pw">
							<WifiPassword />
						</Route>
						<Route exact path="/wifi-manual" >
							<WifiManual />
						</Route>
						<Route exact path="/wifi-connecting">
							<ConnectingWifi />
						</Route>
	
					</Switch>
				}
					
					{/* <Home/> */}
				
					{/* <div className="self-stretch flex flex-col gap-4 items-stretch sticky -bottom-8 right-0 left-0">
						<div className="px-4">
							<Alert />
						</div>

						
						<div className="bg-primary_blue p-4 pb-8 ">
							<button className="bg-primary_yellow py-2.5 px-8 rounded font-medium font-base float-right">
								Save
							</button>
						</div>
					</div> */}
				</div>
				
			</div>
		</Router>
	);
}

const RedirectComponent: React.FC<{ error?: boolean }> = ({ error = false, children}) => (
	<>
	{
		error ? <Redirect to='/'/> : <>{children}</>
	}
	</>
)

export default App;
