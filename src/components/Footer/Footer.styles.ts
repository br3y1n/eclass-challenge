import { Styles } from "../../models";
import { FOOTER_HEIGHT } from "./constants";

const footerStyles: Styles = {
  container: {
    height: ({ spacing }) => spacing(FOOTER_HEIGHT),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    bgcolor: "primary.dark",
    alignItems: "center",
    color: "#FFFFFF",
  },
};

export { footerStyles };
