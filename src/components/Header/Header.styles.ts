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
    px: {
      xs: 1,
      sm: 3,
    },
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#b5b5b5",
    fontSize: {
      xs: "12px",
      sm: "16px",
    },

    "&.active": {
      borderBottom: "solid 1px #FFFFFF",
    },

    "&:hover": {
      bgcolor: "primary.dark",
    },

    "& img": {
      height: {
        xs: "30%",
        sm: "50%",
      },
    },
  },
};

export { headerStyles };
