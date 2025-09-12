import { PATHS } from "@/shared/config";

interface HeaderMenu {
  href: string;
  text: string;
}

export const HEADER_MENU: HeaderMenu[] = [
  {
    href: PATHS.marketplace,
    text: "Marketplace",
  },
  {
    href: PATHS.rankings,
    text: "Rankings",
  },
];

export const HEADER_USER_MENU: HeaderMenu[] = [
  {
    href: PATHS.root,
    text: "Profile",
  },
];
