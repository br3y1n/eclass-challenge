import { Styles } from "../../models";

const detailsStyles: Styles = {
  img: {
    mb: 3,
    maxWidth: ({ spacing }) => spacing(40),
    width: "100%",
  },
  table: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "80%",
    mx: "auto",
  },
  key: {
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  value: {
    color: "#b5b5b5",
  },
};

export { detailsStyles };
