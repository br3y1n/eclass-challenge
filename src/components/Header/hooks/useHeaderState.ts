import { UseHeaderState } from "../models/UseHeaderState.models";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useAppState } from "../../../hooks/useAppState";
import { getMenuItems } from "../../../utils/getMenuItems/getMenuItems";

const useHeaderState: UseHeaderState = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const { isMobile } = useAppState();
  const items = getMenuItems(isMobile);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  return { showMenu, items, pathname, closeMenu, toggleMenu, isMobile };
};

export { useHeaderState };
