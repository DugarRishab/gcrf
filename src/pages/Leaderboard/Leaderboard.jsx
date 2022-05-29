import React, { useEffect, useState } from "react";
import axios from "axios";
import { getReport, getTodo } from "../../service/services";

const LeaderBoard = () => {
	const [data, setData] = useState([]);
	const [posts, setPosts] = useState([]);

	const handleOnClick = async () => {
		const res = await getReport();
		setData(res.data);
		console.log(res.data);
	};

	useEffect(() => {
		async function getData() {
			const res = await getReport();
			setData(res.data);
			console.log(res.data);
		}
		getData();
	}, []);

	useEffect(() => {
		async function getData() {
			const res = await getTodo();
			setPosts(res.data);
			console.log(res.data);
		}
		getData();
	}, [data]);

	return <>{data ? data.map((user) => <p>{user.name}</p>) : null}</>;
};

export default LeaderBoard;
