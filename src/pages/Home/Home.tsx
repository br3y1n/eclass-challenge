import RickAndMorty from "../../assets/images/rick-and-morty.png";
import { Box, Typography } from "@mui/material";
import { homeStyles } from "./Home.styles";

const Home = () => (
  <Box sx={homeStyles.container}>
    <Box
      component="img"
      src={RickAndMorty}
      alt={"Rick and Morty"}
      sx={homeStyles.img}
    />
    <Typography variant={"h1"} sx={homeStyles.message}>
      Hi!, I'm Brayan Arango and this is my eClass challenge, for the React
      Frontend vacancy.
    </Typography>
  </Box>
);

export default Home;
