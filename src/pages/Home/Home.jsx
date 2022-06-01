import React from "react";
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
import { Card, Chip, Stack, SwipeableDrawer } from "@mui/material";
import mainLogo from "./../../res/img/banner.png";
import { Link } from "react-router-dom";
import jyotiImg from "../../res/img/jyoti2.jpg";
import arnabImg from "../../res/img/arnab.jpeg";

const Home = () => {
	const facilitators = [
		{
			name: "Jyoti Jaiswal",
			image: jyotiImg,
			url: "https://www.linkedin.com/in/jyoti-jaiswal-she-her-29aab61b8/",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, minima eligendi nostrum quasi, laboriosam asperiores a commodi molestias optio culpa libero? Ipsa nulla ea fugiat magnam vero quae optio distinctio?",
		},
		{
			name: "Arnab Sen",
			image: arnabImg,
			url: "https://arnabsen.bio.link/",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, minima eligendi nostrum quasi, laboriosam asperiores a commodi molestias optio culpa libero? Ipsa nulla ea fugiat magnam vero quae optio distinctio?",
		},
		{
			name: "Arnab Sen",
			image: arnabImg,
			url: "https://arnabsen.bio.link/",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, minima eligendi nostrum quasi, laboriosam asperiores a commodi molestias optio culpa libero? Ipsa nulla ea fugiat magnam vero quae optio distinctio?",
		},
	];
	return (
		<Box
			sx={{
				width: "100vw",
				overflow: "hidden",
				border: "0px solid red",
			}}
		>
			<Box
				sx={{
					maxWidth: { xs: "100vw", md: "1000px" },
					width: "100vw",

					border: "0px solid red",
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					flexDirection: "column",
					color: "white",
					margin: "auto",
				}}
			>
				<Box
					sx={{
						width: { xs: "80%", md: "400px" },
						border: "0px solid red",
						display: { xs: "flex", md: "none" },
					}}
				>
					<img
						src={mainLogo}
						alt=""
						style={{
							width: "100%",
						}}
					/>
				</Box>
				<Stack
					direction="row"
					sx={{
						display: { md: "flex", xs: "none" },
					}}
				>
					<Box
						sx={{
							// width: { xs: "80%", md: "400px" },
							border: "0px solid red",
							flexShrink: 1,
						}}
					>
						<img
							src={mainLogo}
							alt=""
							style={{
								width: "100%",
							}}
						/>
					</Box>

					<Stack direction={"column"}>
						<Typography
							variant="h1"
							sx={{
								display: { md: "flex", xs: "none" },
								textAlign: "left",
								flexGrow: 1,
								padding: "10px",
							}}
						>
							GoogleCloudReady Facilitator Program
						</Typography>
						<a
							href="https://www.iiests.ac.in/"
							style={{
								textDecoration: "none",
							}}
						>
							<Button
								variant="text"
								startIcon={
									<span class="material-icons">
										location_on
									</span>
								}
								sx={{
									color: "rgb(150, 150, 150)",
									mx: "20px",
									my: "20px",
									display: { xs: "none", md: "flex" },
								}}
							>
								IIEST Shibpur
							</Button>
						</a>
					</Stack>
				</Stack>

				<Typography
					variant="h4"
					sx={{
						display: { md: "none", xs: "flex" },
					}}
				>
					GoogleCloudReady Facilitator Program
				</Typography>

				<Box
					sx={{
						width: "100%",
						border: "0px solid red",
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						flexDirection: "column",
						color: "white",
					}}
				>
					<a
						href="https://www.iiests.ac.in/"
						style={{
							textDecoration: "none",
						}}
					>
						<Button
							variant="text"
							startIcon={
								<span class="material-icons">location_on</span>
							}
							sx={{
								color: "rgb(150, 150, 150)",
								mx: "20px",
								my: "20px",
								display: { xs: "flex", md: "none" },
							}}
						>
							IIEST Shibpur
						</Button>
					</a>
				</Box>
				<Stack
					direction="row"
					spacing="10px"
					sx={{
						maxWidth: "100%",
					}}
				>
					<Link to="/report">
						<Button
							type="contained"
							sx={{
								color: "white",
								bgcolor: "rgb(15, 157, 88)",
								py: "15px",
								px: "20px",
								whiteSpace: "nowrap",
							}}
							startIcon={
								<span class="material-icons">summarize</span>
							}
						>
							<h4>Your Report</h4>
						</Button>
					</Link>
					<Link to="/leaderboard">
						<Button
							type="contained"
							sx={{
								color: "white",
								bgcolor: "rgb(219, 68, 55)",
								px: "20px",
								py: "15px",
								whiteSpace: "nowrap",
							}}
							startIcon={
								<span class="material-icons">leaderboard</span>
							}
						>
							<h4>Leaderboard</h4>
						</Button>
					</Link>
				</Stack>
				<Box
					sx={{
						padding: "20px",
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						flexDirection: "column",
						width: "100%",
						boxSizing: "border-box",
						border: "0px solid green",
					}}
				>
					<Typography variant="h4">Facilitators:</Typography>
					<Stack
						direction={{ xs: "row", md: "row" }}
						sx={{
							overflowX: "scroll",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexFlow: "row wrap",
							mt: "20px",
							border: "0px solid green",
						}}
					>
						{facilitators.map((user) => (
							<Card
								sx={{
									background: "var(--bg--light)",
									minWidth: { md: "300px", xs: "220px" },
									maxWidth: { md: "300px", xs: "220px" },
									mb: "10px",
									mr: "15px",
									borderRadius: "20px",
									color: "white",
								}}
							>
								<CardMedia
									image={user.image}
									// height={{xs: "100px", md: "300px"}}
									component="img"
									sx={{
										height: { xs: "180px" },
									}}
								></CardMedia>
								<CardContent
									sx={{
										border: "0px solid yellow",
										textAlign: "left",
										color: "white",
									}}
								>
									<Typography variant="h6" component={"p"}>
										{user.name}
									</Typography>
									{user.description ? (
										<Typography
											variant="body2"
											color="rgb(180, 180, 180)"
											sx={{
												mt: "10px",
											}}
										>
											{user.description}
										</Typography>
									) : null}
								</CardContent>
								<CardActions>
									<a href={user.url}>
										<IconButton
											sx={{
												color: "white",
											}}
										>
											<span class="material-icons">
												link
											</span>
										</IconButton>
									</a>
								</CardActions>
							</Card>
						))}
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
