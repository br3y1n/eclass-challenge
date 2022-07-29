import { FC } from "react";
import { Box, styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { headerStyles } from "./Header.styles";
import { MENU_ITEMS } from "./constants";

const NewLink = styled(Link)();

const Header: FC = () => {
  const { pathname } = useLocation();

  return (
    <Box component="header" sx={headerStyles.container}>
      <Box component="nav" sx={headerStyles.nav}>
        {MENU_ITEMS.map(({ route, component }, index) => (
          <NewLink
            key={index}
            sx={headerStyles.menu}
            className={route === pathname ? "active" : ""}
            to={route}
          >
            {component}
          </NewLink>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
