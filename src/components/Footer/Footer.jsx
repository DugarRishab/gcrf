import { Divider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
	return (
		<Box
			sx={{
				bgColor: "var(--bg)",
				border: "0px solid red",
				width: "100vw",
				height: "300px",

				boxSizing: "border-box",
				display: "flex",
				flexDirection: "column",
				alignIems: "center",
				justifyContent: "flex-start",
			}}
		>
			<Divider
				orientation="horizontal"
				sx={{
					bgcolor: "rgb(180, 180, 180)",
					width: "calc(100% - 00px)",
				}}
				flexItem
			></Divider>
			<Stack
				direction="column"
				sx={{
					width: "100vw",
					border: "0px solid red",
					color: "white",
					mt: "20px",
					p: "20px",
					alignIems: "center",
					justifyContent: "center",
				}}
				spacing="40px"
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignIems: "center",
						justifyContent: "center",
					}}
				>
					<Typography
						variant="h4"
						fontWeight="600"
						textAlign="center"
						sx={{
							fontSize: { xs: "30px", md: "40px" },
						}}
					>
						Socials
					</Typography>
					<Typography
						variant="h5"
						fontWeight="400"
						color="rgb(150, 150, 150)"
						textAlign="center"
						sx={{
							fontSize: { xs: "20px", md: "25px" },
						}}
					>
						Follow us to get notified about our sessions, events and
						competitions!
					</Typography>
				</Box>
				<Stack
					sx={{
						display: "flex",
						flexDirection: "row",
						alignIems: "center",
						justifyContent: "center",
						fontSize: "30px",
						color: "rgb(150, 150, 150) !important",
						transition: " 2s all",
					}}
					direction="row"
					spacing="20px"
				>
					<a
						className="quick-link"
						href="https://www.youtube.com/codeiiest"
					>
						<i class="fa-brands fa-youtube"></i>
					</a>
					<a
						href="https://github.com/CodeIIEST-dev"
						className="quick-link"
					>
						<i class="fa-brands fa-github"></i>
					</a>
					<a
						className="quick-link"
						href="https://twitter.com/codeiiest"
					>
						<i class="fa-brands fa-twitter"></i>
					</a>
					<a
						className="quick-link"
						href="https://www.facebook.com/CodeIIEST"
					>
						<i class="fa-brands fa-facebook"></i>
					</a>
					<a
						className="quick-link"
						href="mailto:codeiiest.iiest@gmail.com"
					>
						<i class="fa-solid fa-envelope"></i>
					</a>
				</Stack>
			</Stack>
		</Box>
	);
}
 
export default Footer;