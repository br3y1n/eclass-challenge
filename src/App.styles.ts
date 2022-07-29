import { Styles } from "./models";
import { HEADER_HEIGHT } from "./components/Header/constants";
import { FOOTER_HEIGHT } from "./components/Footer/constants";

const PADDING_SECTION_SM = 8;
const PADDING_SECTION_XS = 2;

const appStyles: Styles = {
  main: {
    height: ({ spacing }) => `calc(100% - ${spacing(HEADER_HEIGHT)})`,
    width: "100%",
    overflowY: "auto",
  },
  section: {
    minHeight: ({ spacing }) => ({
      xs: `calc(100% - ${spacing(FOOTER_HEIGHT + PADDING_SECTION_XS * 2)})`,
      sm: `calc(100% - ${spacing(FOOTER_HEIGHT + PADDING_SECTION_SM * 2)})`,
    }),
    width: ({ spacing }) => ({
      xs: `calc(100% - ${spacing(PADDING_SECTION_XS * 2)})`,
      sm: `calc(100% - ${spacing(PADDING_SECTION_SM * 2)})`,
    }),
    maxWidth: ({
      breakpoints: {
        values: { md },
      },
    }) => md,
    mx: "auto",
    p: { xs: PADDING_SECTION_XS, sm: PADDING_SECTION_SM },
  },
};

export { appStyles };
