import { FC, useState } from "react";
import { Box, IconButton, styled, Theme, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { headerStyles } from "./Header.styles";
import { getMenuItems } from "../../utils/getMenuItems/getMenuItems";
import MenuIcon from "@mui/icons-material/Menu";

const NewLink = styled(Link)({});

const Header: FC = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const items = getMenuItems(isMobile);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <Box
      component="header"
      sx={headerStyles.container}
      className={showMenu ? "showMenu" : undefined}
    >
      <Box component="nav" sx={headerStyles.nav}>
        {items.map(({ route, component }, index) => (
          <NewLink
            key={index}
            sx={headerStyles.menu}
            className={route === pathname ? "active" : undefined}
            to={route}
            onClick={closeMenu}
          >
            {component}
          </NewLink>
        ))}

        {isMobile && (
          <IconButton sx={headerStyles.burger} onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Header;
