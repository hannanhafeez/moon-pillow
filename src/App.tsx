import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './pages/Home';
import EditWatchlist from "./pages/EditWatchlist";

function App() {
	return (
		<Router>
			<div className="w-screen h-screen flex justify-center">
				
				<div className={
					"w-full h-full max-w-768 min-h-full max-h-screen flex flex-col items-center " + 
					"bg-gradient-to-b from-primary_blue to-black font-sans"
					}
				>
					<Switch>
						{/* <Route path="/about">
							<About />
						</Route>
						<Route path="/users">
							<Users />
						</Route> */}
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
