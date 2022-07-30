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
