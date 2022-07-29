import { IStyles } from "../../models/Styles.models";
import { HEADER_HEIGHT } from "./constants/sizes/sizes";

const headerStyles: IStyles = {
  container: {
    bgcolor: "rgba(0,0,0,0.6)",
    height: ({ spacing }) => spacing(HEADER_HEIGHT),
    width: "100%",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
  },
  menu: {
    height: ({ spacing }) => spacing(HEADER_HEIGHT),
    px: 3,
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#b5b5b5",

    "&.active": {
      borderBottom: "solid 1px #FFFFFF",
    },

    "&:hover": {
      bgcolor: "primary.dark",
    },

    "& img": {
      height: "50%",
    },
  },
};

export { headerStyles };
