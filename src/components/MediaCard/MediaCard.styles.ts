import { Styles } from "../../models";

const mediaCardStyles: Styles = {
  button: {
    color: "secondary.dark",
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    p: 0,

    "&:first-child": {
      mr: {
        xs: 1.5,
        sm: 3,
      },
    },
  },
  text: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  container: {
    display: "inline-block",
    width: "100%",
    maxWidth: ({ spacing }) => ({
      xs: spacing(40),
      sm: spacing(22),
    }),
    my: {
      xs: 1,
      sm: 2,
    },
    mx: {
      xs: 0,
      sm: 2,
    },
    bgcolor: "#000000",
  },
  subContainer: {
    display: "flex",
    flexDirection: {
      xs: "row",
      sm: "column",
    },
  },
  img: {
    width: ({ spacing }) => ({
      xs: spacing(12),
      sm: "100%",
    }),
  },
  description: {
    overflow: "hidden",
  },
};

export { mediaCardStyles };
