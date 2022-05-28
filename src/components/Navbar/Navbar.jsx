import { Button } from '@mui/material';
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Drawer, SwipeableDrawer } from "@mui/material";
import './Navbar.css';
import logo from '../../res/img/Google_Cloud_Storage_logo.png'

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<MediaQuery minWidth={700}>
				<Link to="/" className="logo">
					<img src={logo} alt="" />
				</Link>

				<div className="nav-items">
					<NavLink to="/" className="nav-item">
						<Button variant="text">Home</Button>
					</NavLink>
					<NavLink to="/report" className="nav-item">
						<Button variant="text">Report</Button>
					</NavLink>
					<NavLink to="/leaderboard" className="nav-item">
						<Button variant="text">LeaderBoard</Button>
					</NavLink>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={1024}>
				{/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
				<SwipeableDrawer
					anchor={anchor}
					open={state[anchor]}
					onClose={toggleDrawer(anchor, false)}
				>
					{list(anchor)}
				</SwipeableDrawer> */}
			</MediaQuery>
		</nav>
	);
}
 
export default Navbar;