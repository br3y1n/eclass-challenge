import { Styles } from "../../models";
import { HEADER_HEIGHT } from "./constants";

const headerStyles: Styles = {
  container: {
    height: ({ spacing }) => spacing(HEADER_HEIGHT),
    width: "100%",
    overflow: "hidden",

    "&.showMenu": {
      overflow: "inherit",
    },
  },
  nav: {
    zIndex: 2,
    bgcolor: "#001224",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
  },
  menu: {
    height: ({ spacing }) => `calc(${spacing(HEADER_HEIGHT)} - 1px)`,
    px: 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  burger: {
    position: "absolute",
    zIndex: 2,
    right: ({ spacing }) => spacing(HEADER_HEIGHT / 4),
    top: ({ spacing }) => spacing(HEADER_HEIGHT / 4),
    color: "text.white",
  },
};

export { headerStyles };
