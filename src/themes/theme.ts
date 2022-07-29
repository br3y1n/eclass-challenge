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
    },
  },
});

export { theme };
