import { FC } from "react";
import { Box } from "@mui/material";
import { footerStyles } from "./Footer.styles";

const Footer: FC = () => (
  <Box component="footer" sx={footerStyles.container}>
    By BreYin
  </Box>
);

export default Footer;
