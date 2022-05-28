import "./App.css";
import AllRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import MediaQuery from "react-responsive";

import Navbar from "./components/Navbar/Navbar";
import { Drawer, SwipeableDrawer } from "@mui/material";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";

function App() {
	return (
		<div className="App">
			<Router>
				{/* <Navbar></Navbar> */}
				{/* <AppBar></AppBar> */}
				<ResponsiveAppBar></ResponsiveAppBar>

				<AllRoutes></AllRoutes>
			</Router>
		</div>
	);
}

export default App;
