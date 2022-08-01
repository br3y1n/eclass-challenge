import { MENU_ITEMS } from "../../components/Header/constants";
import { GetMenuItems } from "../../models";
import { isValidElement } from "react";

const getMenuItems: GetMenuItems = (isMobile) => {
  return isMobile
    ? [...MENU_ITEMS].sort(
        ({ component: componentA }, { component: componentB }) => {
          const isValidA = isValidElement(componentA);
          const isValidB = isValidElement(componentB);

          if (isValidA && !isValidB) {
            return -1;
          } else if (!isValidA && isValidB) {
            return 1;
          }

          return 0;
        }
      )
    : MENU_ITEMS;
};

export { getMenuItems };
