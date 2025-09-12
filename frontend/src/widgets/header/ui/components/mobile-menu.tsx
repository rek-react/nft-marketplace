"use client";

import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { PATHS, NAV } from "@/shared/config";
import { Link, Logo, MenuIcon } from "@/shared/ui";
import { useState } from "react";
import { useAuthContext } from "@/shared/auth";
import { UserAvatar } from "@/entities/user";
import { useProfileMenu } from "../../model";
import { UserMenu } from "./user-menu";
import { HEADER_MENU } from "../../config";
import { useShortAddress } from "@/entities/wallet";
import { UserBalance } from "./user-balance";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { authenticated } = useAuthContext();
  const address = useShortAddress();
  const {
    anchorEl,
    openMenu: openProfileMenu,
    closeMenu: closeProfileMenu,
  } = useProfileMenu();
  const theme = useTheme();

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton size="large" onClick={openMenu} color="inherit">
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={closeMenu}>
        <Stack
          sx={{
            height: 1,
            width: NAV.W_BASE,
            pt: 3,
            pb: 2,
            px: 2.5,
            flexShrink: 0,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Logo />
            <Box mt={3}>
              <Stack spacing={2}>
                {HEADER_MENU.map(({ href, text }) => (
                  <Link href={href} key={text} onClick={closeMenu}>
                    {text}
                  </Link>
                ))}
              </Stack>
            </Box>
          </Box>

          <Box>
            <Divider sx={{ my: 2 }} />

            {authenticated ? (
              <Box>
                <ButtonBase
                  sx={{
                    gap: 0.5,
                    width: 1,
                    py: 1,
                    px: 1,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 10,
                    justifyContent: "flex-start",
                  }}
                  onClick={openProfileMenu}
                >
                  <UserAvatar sx={{ width: 35, height: 35 }} />
                  <Stack>
                    <Typography variant="body2" textAlign="left">
                      {address}
                    </Typography>
                    <UserBalance />
                  </Stack>
                </ButtonBase>
                <UserMenu
                  anchorEl={anchorEl}
                  onClose={closeProfileMenu}
                  isMobile
                />
              </Box>
            ) : (
              <Button
                size="small"
                href={PATHS.auth.connectWallet}
                component={Link}
                fullWidth
                onClick={closeMenu}
              >
                Connect wallet
              </Button>
            )}
          </Box>
        </Stack>
      </Drawer>
    </Box>
  );
}
