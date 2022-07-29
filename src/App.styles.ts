import { IStyles } from "./models/Styles.models";
import { HEADER_HEIGHT } from "./components/Header/constants/sizes/sizes";
import { FOOTER_HEIGHT } from "./components/Footer/constants/sizes/sizes";

const appStyles: IStyles = {
  main: {
    height: ({ spacing }) => `calc(100% - ${spacing(HEADER_HEIGHT)})`,
    width: "100%",
  },
  section: {
    height: ({ spacing }) => `calc(100% - ${spacing(FOOTER_HEIGHT)})`,
    width: "100%",
    overflowY: "auto",
  },
};

export { appStyles };
