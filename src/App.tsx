import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './pages/Home';
import EditWatchlist from "./pages/EditWatchlist";
import SelectWifi from "./pages/WifiSetup/SelectWifi";
import WifiPassword from "./pages/WifiSetup/WifiPassword";
import WifiManual from "./pages/WifiSetup/WifiManual";
import ConnectWifi from "./pages/WifiSetup/ConnectWifi";

function App() {
	return (
		<Router>
			<div className="w-screen h-screen max-h-screen flex justify-center bg-gradient-to-b from-primary_blue overflow-scroll">
				
				<div className={
					"w-full h-full max-w-768 min-h-full max-h-screen flex-1 flex flex-col items-center " + 
					"to-black font-sans"
					}
				>
					<Switch>
						{/* <Route path="/about">
							<About />
						</Route>
						<Route path="/users">
							<Users />
						</Route> */}
						<Route path="/connect-wifi">
							<ConnectWifi />
						</Route>

						<Route path="/wifi">
							<SelectWifi />
						</Route>
						<Route path="/wifi-pw">
							<WifiPassword />
						</Route>
						<Route path="/wifi-manual">
							<WifiManual />
						</Route>
						
						<Route path="/edit">
							<EditWatchlist />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
					{/* <Home/> */}
				</div>
				
			</div>
		</Router>
	);
}

export default App;
