"use client";

import { Box, Button, ButtonBase, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { PATHS } from "@/shared/config";
import { Link } from "@/shared/ui";
import { UserAvatar } from "@/entities/user";
import { useAuthContext } from "@/shared/auth";
import { UserMenu } from "./user-menu";
import { useProfileMenu } from "../../model";
import { HEADER_MENU } from "../../config";
import { UserBalance } from "./user-balance";
import { useShortAddress } from "@/entities/wallet";

export function DesktopMenu() {
  const theme = useTheme();

  const address = useShortAddress();

  const { authenticated } = useAuthContext();
  const {
    anchorEl,
    openMenu: openProfileMenu,
    closeMenu: closeProfileMenu,
  } = useProfileMenu();

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex", alignItems: "center" },
        gap: "10px",
      }}
    >
      {HEADER_MENU.map(({ href, text }) => (
        <Button
          key={text}
          href={href}
          component={Link}
          size="small"
          variant="text"
        >
          {text}
        </Button>
      ))}

      {authenticated ? (
        <>
          <UserBalance />
          <ButtonBase
            sx={{
              gap: 0.5,
              py: 1,
              px: 1,
              backgroundColor: theme.palette.background.default,
              borderRadius: 10,
              justifyContent: "flex-start",
            }}
            onClick={openProfileMenu}
          >
            <UserAvatar sx={{ width: 35, height: 35 }} />
            <Typography variant="body2">{address}</Typography>
            <Icon icon="mdi:chevron-down" width={20} height={20} />
          </ButtonBase>
          <UserMenu anchorEl={anchorEl} onClose={closeProfileMenu} />
        </>
      ) : (
        <Button href={PATHS.auth.connectWallet} component={Link}>
          Connect wallet
        </Button>
      )}
    </Box>
  );
}
