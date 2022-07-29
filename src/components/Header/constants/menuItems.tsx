import { MenuItems } from "../models";
import { RoutesEnum } from "../../../enums";
import EClassLogo from "../../../assets/images/eclass-logo.svg";

const MENU_ITEMS: MenuItems[] = [
  { route: RoutesEnum.RULES, component: "RULES" },
  { route: RoutesEnum.CHARACTERS, component: "CHARACTERS" },
  {
    route: RoutesEnum.HOME,
    component: <img src={EClassLogo} alt="eClass Logo" />,
  },
  { route: RoutesEnum.FAVORITES, component: "FAVORITES" },
  { route: RoutesEnum.EXTRA, component: "EXTRA" },
];

export { MENU_ITEMS };
