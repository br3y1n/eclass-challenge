import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#001e3c",
    },
    secondary: {
      main: "#0080ff",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#0080ff",
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
          color: "#b5b5b5",
        },
        icon: {
          color: "#b5b5b5",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#b5b5b5",
        },
        notchedOutline: {
          borderColor: "#b5b5b5 !important",
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
            color: "#b5b5b5",
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
      fontSize: "40px",
      color: "#FFFFFF",
      textAlign: "center",
      padding: "16px",
      paddingTop: "0px",
    },
    h2: {
      fontSize: "30px",
      color: "#FFFFFF",
      paddingBottom: "16px",
    },
    h3: {
      fontSize: "20px",
      color: "#FFFFFF",
      paddingBottom: "16px",
    },
    body1: {
      color: "#b5b5b5",
      fontSize: "20px",
      textAlign: "justify",
    },
    body2: {
      color: "#b5b5b5",
      fontSize: "18px",
      textAlign: "justify",
    },
  },
});

export { theme };
