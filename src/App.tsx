import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appStyles } from "./App.styles";
import { Characters, Favorites, Home } from "./pages";
import { RoutesEnum } from "./enums/routes.enums";

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />

      <Box component="main" sx={appStyles.main}>
        <Box component="section" sx={appStyles.section}>
          <Routes>
            <Route path={RoutesEnum.HOME} element={<Home />} />
            <Route path={RoutesEnum.CHARACTERS} element={<Characters />} />
            <Route path={RoutesEnum.FAVORITES} element={<Favorites />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
