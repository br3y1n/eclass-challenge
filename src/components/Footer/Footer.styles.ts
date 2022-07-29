import { IStyles } from "../../models/Styles.models";
import { FOOTER_HEIGHT } from "./constants/sizes/sizes";

const footerStyles: IStyles = {
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
