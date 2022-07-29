import { FC } from "react";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { headerStyles } from "./Header.styles";
import { MENU_ITEMS } from "./constants/menuItems/menuItems";

const Header: FC = () => {
  const { pathname } = useLocation();

  return (
    <Box component="header" sx={headerStyles.container}>
      <Box component="nav" sx={headerStyles.nav}>
        {MENU_ITEMS.map(({ route, component }) => (
          <Box
            component={Link}
            to={route}
            sx={headerStyles.menu}
            className={route === pathname ? "active" : ""}
          >
            {component}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
