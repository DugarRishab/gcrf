import React, { useEffect, useState } from "react";
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
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Card, Chip, Divider, Stack, SwipeableDrawer } from "@mui/material";
import axios from "axios";
import { getLeaderboard, getReport, getTodo } from "../../service/services";
import leaderBoardImg from "../../res/img/trophy2.png";

const LeaderBoard = () => {
	const [users, setUsers] = useState(null);
	const [getData, setGetData] = useState(0)

	useEffect(() => {
		async function getUsers() {
			try {
				const res = await getLeaderboard();
				setUsers(res.data.data.users);
			} catch (err) {
				console.log(err);
			}
		}
		getUsers();
	}, [getData]);

	return (
		<Box
			sx={{
				border: "0px solid green",
				width: "100vw",
				mt: "80px",
				// overflowX: "hidden",
				color: "white",
				position: "relative",
			}}
		>
			<Stack
				direction="column"
				sx={{
					width: "100vw",
					// overflowX: "hidden",
					border: "0px solid red",
					position: "relative",
					// display: { xs: "none", sm: "flex" },
					// padding: "20px",
					px: "20px",
					ml: { xs: "10px", md: "50px" },
					// overflow: "hidden",
				}}
			>
				<Box
					sx={{
						border: "0px solid red",
						position: "absolute",
						// right: { xs: "-160%", md: "-40%" },
						right: 0,
						transform: {
							xs: "translateX(50%)",
							md: "translateX(30%)",
						},
						top: "30px",

						bottom: "0px",
						zIndex: "-100",
						opacity: "80%",
					}}
				>
					<img
						src={""}
						alt=""
						style={{
							height: "90vh",
							// width: "100vh",
						}}
					/>
				</Box>
				<Stack
					direction={{ xs: "column", md: "row" }}
					sx={{
						width: { xs: "100%", md: "60%" },
						border: "0px solid red",
						display: "flex",
						// flexDirection: {xs: "row", md: "column"},
						alignItems: { xs: "flex-start", md: "center" },
						justifyContent: "space-between",
					}}
				>
					<Typography
						variant="h2"
						sx={{
							border: "0px solid blue",
							textAlign: "left",
						}}
					>
						Leaderboard
					</Typography>
					<Button
						variant="contained"
						onClick={() => {
							setGetData(getData + 1);
						}}
						startIcon={<span class="material-icons">refresh</span>}
						sx={{
							py: "10px",
							color: "white",
							display: "flex",
							px: "20px",
							borderRadius: "25px",
							textDecoration: "none",
							width: "fit-content",
							height: "100%",
							mt: "10px",
						}}
					>
						Refresh
					</Button>
				</Stack>
				<Stack
					sx={{
						width: { xs: "95%", md: "60%" },
						border: "1px solid rgb(150, 150, 150)",
						textAlign: "left",
						borderRadius: "15px",
						padding: "20px",
						bgcolor: "var(--bg--light)",
						my: "50px",
						display: "flex",
						flexDirection: "column",
						backdropFilter: "blur(60px)",
						// fontSize: {md: "10px", xs: ""},
					}}
				>
					<Typography variant="h5">Milestone #4</Typography>
					<Box
						className="no-scrollbar"
						sx={{
							maxHeight: "200px",
							overflowY: "",
						}}
					>
						{users !== null
							? users
									.filter(
										(user) =>
											user.quests >= 40 &&
											// user.quests < 20 &&
											user.badges >= 20
										// user.badges < 10
									)
									.map((user) => (
										<Box
											sx={{
												p: "5px",
												textIndent: "10px",
												border: "1px solid rgb(150, 150, 150, 0.5)",
												borderRadius: "5px",
												my: "5px",
												bgcolor: "var(--bg)",
											}}
										>
											{user.name}
										</Box>
									))
							: null}
					</Box>

					<Typography mt="15px" variant="h5">
						Milestone #3
					</Typography>
					<Box
						className="no-scrollbar"
						sx={{
							maxHeight: "200px",
							overflowY: "",
						}}
					>
						{users !== null
							? users
									.filter(
										(user) =>
											user.quests >= 30 &&
											// user.quests < 40 &&
											user.badges >= 15
										// user.badges < 10
									)
									.map((user) => (
										<Box
											sx={{
												p: "5px",
												textIndent: "10px",
												border: "1px solid rgb(150, 150, 150, 0.5)",
												borderRadius: "5px",
												my: "5px",
												bgcolor: "var(--bg)",
											}}
										>
											{user.name}
										</Box>
									))
							: null}
					</Box>

					<Typography mt="15px" variant="h5">
						Milestone #2
					</Typography>
					<Box
						className="no-scrollbar"
						sx={{
							maxHeight: "200px",
							overflowY: "",
						}}
					>
						{users !== null
							? users
									.filter(
										(user) =>
											user.quests >= 20 &&
											// user.quests < 30 &&
											user.badges >= 10
										// user.badges < 15
									)
									.map((user) => (
										<Box
											sx={{
												p: "5px",
												textIndent: "10px",
												border: "1px solid rgb(150, 150, 150, 0.5)",
												borderRadius: "5px",
												my: "5px",
												bgcolor: "var(--bg)",
											}}
										>
											{user.name}
										</Box>
									))
							: null}
					</Box>

					<Typography mt="15px" variant="h5">
						Milestone #1
					</Typography>
					<Box
						className="no-scrollbar"
						sx={{
							maxHeight: "200px",
							overflowY: "scroll",
						}}
					>
						{users !== null
							? users
									.filter(
										(user) =>
											user.quests >= 10 &&
											// user.quests < 20 &&
											user.badges >= 5
										// user.badges < 10
									)
									.map((user) => (
										<Box
											sx={{
												p: "5px",
												textIndent: "10px",
												border: "1px solid rgb(150, 150, 150, 0.5)",
												borderRadius: "5px",
												my: "5px",
												bgcolor: "var(--bg)",
											}}
										>
											{user.name}
										</Box>
									))
							: null}
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
};

export default LeaderBoard;
