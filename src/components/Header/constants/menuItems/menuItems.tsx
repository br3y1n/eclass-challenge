import { IMenuItems } from "./menuItems.models";
import { RoutesEnum } from "../../../../enums/routes.enums";
import EClassLogo from "../../../../assets/images/eclass-logo.svg";

const MENU_ITEMS: IMenuItems[] = [
  { route: RoutesEnum.CHARACTERS, component: "CHARACTERS" },
  {
    route: RoutesEnum.HOME,
    component: <img src={EClassLogo} alt="eClass Logo" />,
  },
  { route: RoutesEnum.FAVORITES, component: "FAVORITES" },
];

export { MENU_ITEMS };
