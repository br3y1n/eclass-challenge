import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const Details = () => {
  const { id } = useParams();

  return <Typography variant={"h1"}>Details {id}</Typography>;
};

export default Details;
