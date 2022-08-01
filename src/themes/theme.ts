import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    main: "#001e3c",
  },
  secondary: {
    main: "#0080ff",
  },
  text: {
    primary: "#b5b5b5",
    white: "#FFFFFF",
  },
};

const fonts = {
  h1: {
    xs: "35px",
    sm: "40px",
  },
  h2: {
    xs: "25px",
    sm: "30px",
  },
  h3: {
    xs: "16px",
    sm: "20px",
  },
  body1: {
    xs: "16px",
    sm: "20px",
  },
  body2: {
    xs: "14px",
    sm: "18px",
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const theme = createTheme({
  palette,
  breakpoints,
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: palette.secondary.main,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          margin: "16px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: palette.text.primary,
        },
        icon: {
          color: palette.text.primary,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: palette.text.primary,
        },
        notchedOutline: {
          borderColor: `${palette.text.primary} !important`,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          margin: "16px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: palette.text.primary,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif, Arial",
    h1: {
      fontSize: fonts.h1.sm,
      color: palette.text.white,
      textAlign: "center",
      padding: "16px",
      paddingTop: "0px",

      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: fonts.h1.xs,
      },
    },
    h2: {
      fontSize: fonts.h2.sm,
      color: palette.text.white,
      paddingBottom: "16px",

      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: fonts.h2.xs,
      },
    },
    h3: {
      fontSize: fonts.h3.sm,
      color: palette.text.white,
      paddingBottom: "16px",

      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: fonts.h3.xs,
      },
    },
    body1: {
      color: palette.text.primary,
      fontSize: fonts.body1.sm,
      textAlign: "justify",

      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: fonts.body1.xs,
      },
    },
    body2: {
      color: palette.text.primary,
      fontSize: fonts.body2.sm,
      textAlign: "justify",

      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: fonts.body2.xs,
      },
    },
  },
});

export { theme, fonts };
