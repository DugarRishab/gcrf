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
import { Card, Chip, Divider, Stack, SwipeableDrawer } from "@mui/material";
import mainLogo from "./../../res/img/banner_large.png";
import { Link } from "react-router-dom";
import jyotiImg from "../../res/img/jyoti2.jpg";
import arnabImg from "../../res/img/arnab.jpeg";
import googleLogo from "../../res/img/google.png";
import codeIIESTLogo from "../../res/img/codeIIEST.png";
import { textAlign } from "@mui/system";
const Home2 = () => {
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
				border: "0px solid green",
				width: "100vw",
				mt: "80px",
			}}
		>
			<Stack
				direction="column"
				sx={{
					width: "100vw",
					// overflowX: "hidden",
					border: "0px solid red",
					position: "relative",
					display: { xs: "none", sm: "flex" },

					// overflow: "hidden",
				}}
			>
				<Box
					sx={{
						border: "0px solid red",
						position: "absolute",
						// right: { xs: "-160%", md: "-40%" },
						right: 0,
						transform: "translateX(50%)",
						top: "50px",
						zIndex: "-100",
					}}
				>
					<img
						src={mainLogo}
						alt=""
						style={{
							height: "150vh",
						}}
					/>
				</Box>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						border: "0px solid red",
						color: "white",
						width: "50vw",
						mt: "50px",
						flexDirection: "column",
						alignItems: "flex-start",
						ml: "100px",
						px: "0px",
					}}
				>
					<Typography
						variant={"h2"}
						component="p"
						fontWeight={"700"}
						sx={{
							textAlign: "left",
							fontSize: { xl: "90px" },
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
								<span class="material-icons">location_on</span>
							}
							sx={{
								color: "rgb(180, 180, 180)",
								mx: "00px",
								my: "20px",
								pl: "0",
								display: { xs: "flex", md: "flex" },
								border: "0px solid red",
							}}
						>
							IIEST Shibpur
						</Button>
					</a>
					<Stack direction="row" spacing="20px">
						<Link to="/report">
							<Button
								variant="contained"
								sx={{
									py: "10px",
									color: "white",
									display: "flex",
									px: "20px",
									borderRadius: "25px",
									textDecoration: "none",
									// width: "100%",
									// height: "100%",
								}}
							>
								Get you Report
							</Button>
						</Link>
						<Link to="/leaderboard">
							<Button
								variant="outlined"
								sx={{
									py: "10px",
									color: "white",
									display: "flex",
									px: "20px",
									borderRadius: "25px",
									textDecoration: "none",
									// width: "100%",
									// height: "100%",
								}}
							>
								Leaderboard
							</Button>
						</Link>
					</Stack>
				</Box>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						border: "0px solid red",
						color: "white",
						width: "50vw",
						mt: "150px",
						mb: "5vh",
						flexDirection: "row",
						alignItems: "flex-start",
						ml: "100px",
					}}
				>
					<Stack
						direction="row"
						sx={{
							alignItems: "center",
							mr: "20px",
						}}
						spacing="10px"
					>
						<img
							style={{
								height: "40px",
							}}
							src={googleLogo}
							alt="GooGle"
						></img>
						<Divider
							orientation="vertical"
							sx={{
								bgcolor: "rgb(180, 180, 180)",
								width: "2px",
							}}
							flexItem
							variant="middle"
						></Divider>
						<img
							style={{
								height: "80px",
							}}
							src={codeIIESTLogo}
							alt="CodeIIEST"
						></img>
					</Stack>
				</Box>
			</Stack>
			<Stack
				sx={{
					alignItems: "center",
					border: "0px solid red",
					color: "white",
					display: { xs: "flex", md: "none" },
					width: "100vw",
				}}
			>
				<Box
					sx={{
						border: "0px solid blue",
						width: "100%",
					}}
				>
					<img
						src={mainLogo}
						alt=""
						style={{
							height: "200px",
						}}
					/>
					<Typography variant={"h4"} component="p" fontWeight={"700"}>
						GoogleCloudReady Facilitator Program
					</Typography>
					<Container>
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
									color: "rgb(180, 180, 180)",
									mx: "00px",
									my: "20px",
									border: "0px solid red",
								}}
							>
								IIEST Shibpur
							</Button>
						</a>
					</Container>
					<Stack
						direction="row"
						spacing="20px"
						sx={{
							alignItems: "center",
							justifyContent: "center",
							mt: "40px",
						}}
					>
						<Button
							variant="contained"
							sx={{
								py: "10px",
								color: "white",
								display: "flex",
								px: "20px",
								borderRadius: "25px",
								textDecoration: "none",
								// width: "100%",
								// height: "100%",
							}}
						>
							Get you Report
						</Button>
						<Button
							variant="outlined"
							sx={{
								py: "10px",
								color: "white",
								display: "flex",
								px: "20px",
								borderRadius: "25px",
								textDecoration: "none",
								// width: "100%",
								// height: "100%",
							}}
						>
							Leaderboard
						</Button>
					</Stack>
				</Box>
			</Stack>
			<Stack
				direction="column"
				sx={{
					width: "100vw",
					// overflowX: "hidden",
					border: "0px solid red",
					position: "relative",
					display: { xs: "flex", sm: "flex" },
					color: "white",
					overflow: "hidden",
					mt: "100px",
					px: { xs: "0px", md: "50px" },
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "60%" },
						border: "0px solid blue",
						textAlign: "left",
						padding: "20px",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontSize: { xs: "35px", md: "50px" },
						}}
						component="p"
					>
						What is GoogleCloudReady Facilitator program?
					</Typography>
					<Typography
						variant="body1"
						component={"p"}
						mt="10px"
						color="rgb(180, 180, 180)"
					>
						The GoogleCloudReady Facilitator program will provide
						you an opportunity to kickstart your career in cloud and
						get hands on practice on Google Cloud - the tool that
						powers apps like Google Search, Gmail and YouTube. Along
						the way, you will learn & practice concepts like
						computing, application development, big data & machine
						learning using cloud & if you get stuck, you will have
						your "Facilitators" who are specially trained on Google
						Cloud to help. 😎
					</Typography>
				</Box>
				<Box
					sx={{
						width: "100%",
						border: "0px solid blue",
						textAlign: "left",
						padding: "20px",
						mt: "50px",
					}}
				>
					<Typography variant="h3" component="p">
						Facilitators:
					</Typography>
					<Stack
						direction={{ xs: "row", md: "row" }}
						sx={{
							overflowX: "scroll",
							width: "100%",
							display: "flex",
							justifyContent: { xs: "center", md: "flex-start" },
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
										height: { xs: "180px", md: "250px" },
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
				<Container>
					<Stack
						direction="row"
						sx={{
							alignItems: "center",
							justifyContent: "center",
							mr: "20px",
							border: "0px solid red",
							my: "30px",
							display: { xs: "flex", md: "none" },
						}}
						spacing="10px"
					>
						<img
							style={{
								height: "40px",
							}}
							src={googleLogo}
							alt="GooGle"
						></img>
						<Divider
							orientation="vertical"
							sx={{
								bgcolor: "rgb(180, 180, 180)",
								width: "2px",
							}}
							flexItem
							variant="middle"
						></Divider>
						<img
							style={{
								height: "80px",
							}}
							src={codeIIESTLogo}
							alt="CodeIIEST"
						></img>
					</Stack>
				</Container>
			</Stack>
		</Box>
	);
};

export default Home2;
