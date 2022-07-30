import { Styles } from "../../models";

const charactersStyles: Styles = {
  pagination: {
    mt: 2,
    justifyContent: "center",
    display: "flex",

    "& .MuiPaginationItem-root": {
      color: "#b5b5b5",
    },

    "& button": {
      border: "1px solid rgba(0, 0, 0, 0.6)",
    },
  },
  loading: {
    textAlign: "center",
  }
};

export { charactersStyles };
