"use client";

import { AppBar, Toolbar, useTheme } from "@mui/material";
import { Link, Logo } from "@/shared/ui";
import { DesktopMenu } from "./components/desktop-menu";
import { MobileMenu } from "./components/mobile-menu";
import { HEADER, PATHS } from "@/shared/config";

export function Header() {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
        }}
      >
        <Link
          href={PATHS.root}
          sx={{
            flexBasis: {
              xs: 160,
              md: 244,
            },
          }}
        >
          <Logo />
        </Link>
        <DesktopMenu />
        <MobileMenu />
      </Toolbar>
    </AppBar>
  );
}
