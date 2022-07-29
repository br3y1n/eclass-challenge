import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { appStyles } from "./App.styles";
import { Characters, Details, Extra, Favorites, Home, Rules } from "./pages";
import { RoutesEnum } from "./enums/routes.enums";

const App = () => (
  <BrowserRouter>
    <Header />

    <Box component="main" sx={appStyles.main}>
      <Box component="section" sx={appStyles.section}>
        <Routes>
          <Route path={RoutesEnum.HOME} element={<Home />} />
          <Route path={RoutesEnum.CHARACTERS} element={<Characters />} />
          <Route path={RoutesEnum.FAVORITES} element={<Favorites />} />
          <Route path={RoutesEnum.RULES} element={<Rules />} />
          <Route path={RoutesEnum.EXTRA} element={<Extra />} />
          <Route path={RoutesEnum.DETAILS} element={<Details />} />
          <Route path={"*"} element={<Navigate to={RoutesEnum.HOME} />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  </BrowserRouter>
);

export default App;
