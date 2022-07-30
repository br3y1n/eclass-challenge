import { Styles } from "../../models";

const mediaCardStyles: Styles = {
  button: {
    color: "secondary.dark",
    fontSize: "14px",
    p: 0,

    "&:first-child": {
      mr: 3,
    },
  },
  text: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  container: {
    display: "inline-block",
    maxWidth: ({ spacing }) => spacing(22),
    m: 2,
    bgcolor: "#000000",
  },
};

export { mediaCardStyles };
