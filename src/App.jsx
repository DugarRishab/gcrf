import "./App.css";
import AllRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar></Navbar>
				<AllRoutes></AllRoutes>
			</Router>
		</div>
	);
}

export default App;
