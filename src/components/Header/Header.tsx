import { FC } from "react";
import { Box, IconButton, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { headerStyles } from "./Header.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useHeaderState } from "./hooks/useHeaderState";

const NewLink = styled(Link)({});

const Header: FC = () => {
  const { showMenu, items, pathname, closeMenu, toggleMenu, isMobile } =
    useHeaderState();

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
