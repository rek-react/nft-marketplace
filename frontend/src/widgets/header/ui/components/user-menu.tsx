"use client";

import { Menu, MenuItem, Typography } from "@mui/material";
import { PATHS } from "@/shared/config";
import { useAuthContext } from "@/shared/auth";
import { useRouter } from "next/navigation";
import { HEADER_USER_MENU } from "../../config";

interface UserMenuProps {
  isMobile?: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export function UserMenu({
  anchorEl,
  onClose,
  isMobile = false,
}: UserMenuProps) {
  const { logout } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    onClose();
    router.replace(PATHS.root);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      slotProps={{
        paper: {
          sx: {
            minWidth: isMobile ? anchorEl?.getBoundingClientRect().width : 160,
          },
        },
      }}
    >
      {HEADER_USER_MENU.map(({ href, text }) => (
        <MenuItem
          key={text}
          onClick={() => {
            onClose();
            router.push(href);
          }}
        >
          <Typography variant="button">{text}</Typography>
        </MenuItem>
      ))}
      <MenuItem onClick={handleLogout}>
        <Typography variant="button" color="error">
          Logout
        </Typography>
      </MenuItem>
    </Menu>
  );
}
