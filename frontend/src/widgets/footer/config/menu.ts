import { PATHS } from "@/shared/config";

interface FooterMenu {
  href: string;
  text: string;
}

export const FOOTER_MENU: FooterMenu[] = [
  {
    href: PATHS.marketplace,
    text: "Marketplace",
  },
  {
    href: PATHS.rankings,
    text: "Rankings",
  },
];
