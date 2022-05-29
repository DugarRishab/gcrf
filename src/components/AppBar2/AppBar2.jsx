import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Chip, SwipeableDrawer, createTheme, ThemeProvider } from "@mui/material";
// import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../res/img/Google_Cloud_Storage_logo.png";
import { NavLink, Link, useLocation } from "react-router-dom";
// import "./ResponsiveAppBar.css";
import './Navbar.css';

const pages = ["Home", "Report", "Leaderboard"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AppBar2 = () => {
	const theme = createTheme({
		colors: {
			red: "rgb(219, 68, 55)",
			blue: "rgb(66, 133, 244)",
		},
	});
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const location = useLocation();
	const pageTitle = () => {
		switch (location.pathname) {
			case "/home":
				return "Home";
			case "/report":
				return "Report";
			case "/leaderboard":
				return "Leaderboard";
			default:
				return "PAGE NOT FOUND";
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<AppBar
				position="fixed"
				sx={{
					width: "100vw",
					maxWidth: "100vw",
					background: "var(--bg)",
					backdropFilter: "blur(40px)",
					boxSizing: "border-box",
					height: { xs: "50px", md: "80px" },
					display: "flex",
					alignItems: "center",
					boxShadow: "none",
					border: "0px solid yellow",
				}}
			>
				<Container maxWidth="xl">
					<Toolbar
						disableGutters
						sx={{
							border: "0px solid yellow",
							height: "100%",
						}}
					>
						<Box
							sx={{
								flexGrow: 0,
								display: { xs: "none", md: "flex" },
								height: "80px",
								mx: "50px",
								alignItems: "center",
							}}
						>
							<img
								src={logo}
								alt=""
								style={{
									height: "50%",
									marginRight: "10px",
								}}
							/>
							<Typography variant="h4" fontWeight={"600"}>
								GCRF
							</Typography>
							&nbsp;
							<Typography variant="h4" fontWeight={"400"}>
								Program
							</Typography>
						</Box>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<span class="material-icons">menu</span>
							</IconButton>

							<SwipeableDrawer
								anchor="left"
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								onOpen={handleOpenNavMenu}
								sx={{
									mt: "100px",
									// bgcolor: 'black'
									"& .MuiDrawer-paper": {
										bgcolor: "var(--bg)",
										padding: "0px",
									},
								}}
							>
								<Box
									sx={{
										flexGrow: 0,
										display: { xs: "flex", md: "none" },
										height: "100px",
										// width: ''
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
									}}
								>
									<img
										src={logo}
										alt=""
										style={{
											height: "60%",
										}}
									/>
								</Box>
								{pages.map((page) => (
									<NavLink
										to={`/${page.toLowerCase()}`}
										key={page}
										onClick={handleCloseNavMenu}
										className="menu-item"
									>
										<Button
											variant="text"
											sx={{
												width: "100%",
												textAlign: "left",
												// border: "2px solid red",
												py: "15px",
												px: "20px",
												color: "white",
												justifyContent: "flex-start",
												alignItems: "center",
												flexDirection: "row",
											}}
											startIcon={
												<span class="material-icons">
													{`${page.toLowerCase()}`}
												</span>
											}
										>
											{page}
										</Button>
									</NavLink>
								))}
							</SwipeableDrawer>
						</Box>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								ml: "50px",
								border: "0px solid yellow",
								alignItems: "center",
								justifyContent: "flex-end",
							}}
						>
							{pages.map((page) => (
								<NavLink
									to={`/${page.toLowerCase()}`}
									className="nav-item"
								>
									<Button
										key={page}
										variant={
											pageTitle() === page
												? "contained"
												: "text"
										}
										onClick={handleCloseNavMenu}
										sx={{
											py: "7px",
											color: "white",
											display: "block",
											px: "20px",
											borderRadius: "25px",
											textDecoration: "none",
											width: "100%",
											height: "100%",
										}}
									>
										{page}
									</Button>
									{/* <Chip
										key={page}
										variant={
											pageTitle() === page
												? null
												: "outlined"
										}
										onClick={handleCloseNavMenu}
										label={page}
										color={theme.colors.red}
										sx={{
											color: theme.colors.red,
										}}
									></Chip> */}
								</NavLink>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
};
export default AppBar2;
