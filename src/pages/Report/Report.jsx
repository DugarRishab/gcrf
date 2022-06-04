import { Button, Container, LinearProgress, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { Card, Chip, Divider, Stack, SwipeableDrawer } from "@mui/material";
import validator from "validator"

import { getReport } from "../../service/services";
import reportLogo from "../../res/img/report1.png";
import { alert } from "../../components/CustomAlert/alert";

const Report = () => {
	const [data, setData] = useState([]);
	const [getData, setGetData] = useState([]);
	const [email, setEmail] = useState(null);
	
	const [report, setReport] = useState();

	const handleOnSUbmit = async () => {
		try {
			if (validator.isEmail(email)) {
				const res = await getReport(email);
				setReport(res.data.data.user);
				console.log(res.data.data.user);
			}
			else {
				alert({ message: `Please enter a valid email`, type: "error" });
			}
			
			
		}
		catch (err) {
			console.log(err.response);
			alert({ message: err.response.data.message, type: "error" });
		}
		
	};
	const handleClearReport = () => {
		setReport(null);
	}
	const handleChange = (e) => {
		setEmail(e.target.value);
	}
	const handleOnCancel = () => {
		setEmail("");
		console.log("cancel");
	}

	return (
		<Box
			sx={{
				border: "0px solid green",
				width: "100vw",
				mt: "80px",
				overflowX: "hidden",
				color: "white",
			}}
		>
			{report ? (
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
								xs: "translateX(30%)",
								md: "translateX(0%)",
							},
							top: "30px",
							zIndex: "-100",
						}}
					>
						<img
							src={reportLogo}
							alt=""
							style={{
								height: "90vh",
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
							Report
						</Typography>
						<Button
							variant="contained"
							onClick={handleClearReport}
							startIcon={
								<span class="material-icons">summarize</span>
							}
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
							Get new Report
						</Button>
					</Stack>
					<Box
						sx={{
							width: { xs: "95%", md: "60%" },
							border: "1px solid rgb(150, 150, 150)",
							textAlign: "left",
							borderRadius: "15px",
							padding: "20px",
							bgcolor: "var(--bg--light)",
							mt: "50px",
							display: "flex",
							flexDirection: "column",
							backdropFilter: "blur(60px)",
							// fontSize: {md: "10px", xs: ""},
						}}
					>
						<Stack
							spacing="10px"
							direction={"row"}
							sx={{
								alignItems: "center",
								my: "10px",
								fontSize: { xs: "15px", md: "20px" },
							}}
						>
							<Typography variant="" fontWeight="600">
								Name:{" "}
							</Typography>
							<Typography variant="" fontWeight="400">
								{report.name}{" "}
							</Typography>
						</Stack>
						<Stack
							spacing="10px"
							direction={"row"}
							sx={{
								alignItems: "center",
								my: "10px",
								fontSize: { xs: "15px", md: "20px" },
							}}
						>
							<Typography variant="" fontWeight="600">
								Email:{" "}
							</Typography>
							<Typography variant="" fontWeight="400">
								{report.email}{" "}
							</Typography>
						</Stack>
						<Stack
							spacing="10px"
							direction={"row"}
							sx={{
								alignItems: "flex-start",
								my: "10px",
								fontSize: { xs: "15px", md: "20px" },
							}}
						>
							<Typography variant="" fontWeight="600">
								Institution:{" "}
							</Typography>
							<Typography variant="" fontWeight="400">
								{report.institution}{" "}
							</Typography>
						</Stack>
						<Stack
							spacing="10px"
							direction={"row"}
							sx={{
								alignItems: "center",
								my: "10px",
								fontSize: { xs: "15px", md: "20px" },
							}}
						>
							<Typography variant="" fontWeight="600">
								Status:{" "}
							</Typography>
							<Typography
								variant=""
								fontWeight="400"
								color="var(--green)"
							>
								{report.status}{" "}
							</Typography>
						</Stack>
						<Stack
							spacing="10px"
							direction={"row"}
							sx={{
								alignItems: "center",
								my: "10px",
								fontSize: { xs: "15px", md: "20px" },
							}}
						>
							<Typography variant="" fontWeight="600">
								Qwicklabs:{" "}
							</Typography>
							<Typography
								variant=""
								fontWeight="400"
								color="var(--green)"
							>
								<a href={report.profile}>
									<Button
										type="text"
										sx={{
											py: "7px",
											color: "var(--blue)",
											display: "block",
											px: "20px",
											borderRadius: "25px",
											textDecoration: "none",
											width: "100%",
											height: "100%",
										}}
									>
										Click here
									</Button>
								</a>
							</Typography>
						</Stack>
						<Stack
							spacing="10px"
							direction={"column"}
							sx={{
								alignItems: "flex-start",
								my: "10px",
								fontSize: { xs: "15px", md: "20px" },
							}}
						>
							<Typography variant="h5" fontWeight="500">
								Your Progress:
							</Typography>
							{report.milestones.map((milestone, i) => (
								<Container>
									<Typography variant="caption">
										MileStone #{i + 1}
									</Typography>
									<LinearProgress
										variant="determinate"
										color="primary"
										value={milestone}
									></LinearProgress>
								</Container>
							))}
						</Stack>
					</Box>
					<Stack
						direction="row"
						sx={{
							my: "20px",
						}}
					></Stack>
				</Stack>
			) : (
				<Stack
					direction="column"
					sx={{
						width: "100vw",
						// overflowX: "hidden",
						border: "0px solid green",
						minHeight: "100vh",
						position: "relative",
						// display: { xs: "none", sm: "flex" },
						padding: "20px",
						ml: { xs: "10px", md: "50px" },
						// overflow: "hidden",
					}}
				>
					<Box
						sx={{
							border: "0px solid yellow",
							position: "absolute",
							// right: { xs: "-160%", md: "-40%" },
							right: 0,
							transform: {
								xs: "translateX(30%)",
								md: "translateX(0%)",
							},
							top: "30px",
							zIndex: "-100",
						}}
					>
						<img
							src={reportLogo}
							alt=""
							style={{
								height: "90vh",
							}}
						/>
					</Box>
					<Box
						sx={{
							width: "60%",
							border: "0px solid red",
						}}
					>
						<Typography
							variant="h2"
							sx={{
								border: "0px solid blue",
								textAlign: "left",
							}}
						>
							Get Report
						</Typography>
					</Box>
					<Box
						sx={{
							width: { xs: "95%", md: "60%" },
							border: "1px solid rgb(150, 150, 150)",
							textAlign: "left",
							borderRadius: "15px",
							padding: "20px",
							bgcolor: "var(--bg--light)",
							backdropFilter: "blur(40px)",
							mt: "50px",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Typography variant="h4">Your Email:</Typography>
						<TextField
							sx={{
								mt: "20px",
								color: "white !important",
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: "rgb(150, 150, 150)",
										color: "white",
									},
									"&:hover fieldset": {
										borderColor: "var(--blue)",
									},
									"&:focus fieldset": {
										borderColor: "var(--blue)",
									},
								},
								"& .MuiInputLabel-root": {
									color: "rgb(150, 150, 150)",
								},
								"& .MuiOutlinedInput-input": {
									color: "white",
									bgcolor: "var(--bg)",
								},
							}}
							label="Email"
							type={"email"}
							fullWidth
							variant="outlined"
							value={email}
							onChange={handleChange}
						></TextField>
						<Stack
							direction="row"
							spacing="20px"
							sx={{
								alignItems: "center",
								justifyContent: "flex-start",
								mt: "20px",
								border: "0px solid red",
							}}
						>
							<Button
								variant="contained"
								startIcon={
									<span class="material-icons">
										summarize
									</span>
								}
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
								onClick={handleOnSUbmit}
							>
								Get you Report
							</Button>
							<Button
								variant="text"
								color="error"
								startIcon={
									<span class="material-icons">close</span>
								}
								sx={{
									py: "10px",
									color: "var(--red)",
									display: "flex",
									px: "20px",
									borderRadius: "25px",
									textDecoration: "none",
									// width: "100%",
									// height: "100%",
								}}
								onClick={handleOnCancel}
							>
								Cancel
							</Button>
						</Stack>
					</Box>
				</Stack>
			)}
		</Box>
	);
};

export default Report;
