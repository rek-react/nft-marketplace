"use client";

import { Link } from "@/shared/ui";
import { Stack, Typography, useTheme } from "@mui/material";
import { FOOTER_MENU } from "../config";

export function Links() {
  const theme = useTheme();

  return (
    <Stack>
      <Typography
        variant="h5"
        sx={{
          mb: { md: 4, xs: 3 },
          fontFamily: theme.typography.fontSecondaryFamily,
        }}
      >
        Explore
      </Typography>
      <Stack spacing={3}>
        {FOOTER_MENU.map(({ href, text }) => (
          <Link key={text} href={href}>
            <Typography color="text.secondary" variant="body2" key={text}>
              {text}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
