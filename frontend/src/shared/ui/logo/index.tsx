import { SxProps, Theme } from "@mui/material";
import { Image } from "..";

interface LogoProps {
  sx?: SxProps<Theme>;
}

export function Logo({ sx }: LogoProps) {
  return (
    <Image
      src="/icons/logo.svg"
      alt="logo"
      objectFit="contain"
      sx={{
        width: 1,
        height: 32,
        ...sx,
      }}
    />
  );
}
