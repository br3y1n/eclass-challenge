import { MenuItem } from "./MenuItems.models";

interface UseHeaderStateResponse {
  showMenu: boolean;
  items: MenuItem[];
  pathname: string;
  closeMenu: () => void;
  toggleMenu: () => void;
  isMobile: boolean;
}

type UseHeaderState = () => UseHeaderStateResponse;

export type { UseHeaderState, UseHeaderStateResponse };
