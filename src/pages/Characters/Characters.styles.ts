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
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    my: 2,

    "& input": {
      color: "#b5b5b5",
    },
    "& fieldset": {
      borderColor: "#b5b5b5 !important",
    },
    "& label": {
      color: "#b5b5b5",

      "&.Mui-focused": {
        color: "#b5b5b5",
      },
    },
  },
};

export { charactersStyles };
