import { MENU_ITEMS } from "../../components/Header/constants";
import { GetMenuItems } from "../../models";

const getMenuItems: GetMenuItems = (isMobile) => {
  return isMobile ? MENU_ITEMS.mobile : MENU_ITEMS.desktop;
};

export { getMenuItems };
