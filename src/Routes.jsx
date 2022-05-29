import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Home2 from './pages/Home/Home2';
import LeaderBoard from './pages/Leaderboard/Leaderboard';
import Report from './pages/Report/Report';

const AllRoutes = () => {
	return (
		<Routes>
			<Route
				exact
				path="/home"
				element={
					// <Home></Home>
					<Home2></Home2>
				}
			></Route>
			<Route exact path="/report" element={<Report></Report>}></Route>
			<Route exact path="/leaderboard" element={<LeaderBoard></LeaderBoard>}></Route>
		</Routes>
	);
}
 
export default AllRoutes;