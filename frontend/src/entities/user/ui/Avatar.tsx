"use client";

import { Avatar, AvatarProps, SxProps, Theme, useTheme } from "@mui/material";
import { useAuthContext } from "@/shared/auth";

interface UserAvatarProps extends AvatarProps {
  sx?: SxProps<Theme>;
}

export function UserAvatar(props: UserAvatarProps) {
  const { sx, ...other } = props;

  const theme = useTheme();

  const { user } = useAuthContext();

  return (
    <Avatar
      src={`/images/avatars/${user?.avatarName}`}
      sx={{ border: `2px solid ${theme.palette.background.default}`, ...sx }}
      {...other}
      alt="avatar"
    />
  );
}
