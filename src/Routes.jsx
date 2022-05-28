import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';

const AllRoutes = () => {
	return ( 
		<Routes>
			<Route exact path='/home' element={<Home></Home>}></Route>
		</Routes>
	 );
}
 
export default AllRoutes;