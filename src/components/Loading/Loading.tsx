import { FC } from "react";
import { Typography } from "@mui/material";
import { loadingStyles } from "./Loading.styles";

const Loading: FC = () => (
  <Typography variant={"body1"} sx={loadingStyles.loading}>
    Loading...
  </Typography>
);

export default Loading;
