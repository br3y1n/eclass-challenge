import { ReactNode } from "react";

interface MenuItems {
  mobile: MenuItem[];
  desktop: MenuItem[];
}

interface MenuItem {
  route: string;
  component: ReactNode;
}

export type { MenuItem, MenuItems };
