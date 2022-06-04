import "./App.css";
import AllRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import MediaQuery from "react-responsive";

import Navbar from "./components/Navbar/Navbar";
import { createTheme, Drawer, SwipeableDrawer, ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";
import AppBar2 from "./components/AppBar2/AppBar2";
import Footer from "./components/Footer/Footer";
import "./components/CustomAlert/CustomAlert.css";


function App() {
	const theme = createTheme({
		colors: {
			red: "rgb(219, 68, 55)",
			blue: "rgb(66, 133, 244)",
		},
	});
	return (
		<div className="App">
			<Router>
				<ThemeProvider theme={theme}>
					{/* <Navbar></Navbar> */}
					{/* <AppBar></AppBar> */}
					{/* <ResponsiveAppBar></ResponsiveAppBar> */}
					<AppBar2></AppBar2>

					<AllRoutes></AllRoutes> 
					<Footer></Footer>
				</ThemeProvider>
			</Router>
		</div>
	);
}

export default App;
