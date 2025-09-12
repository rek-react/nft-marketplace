// ----------------------------------------------------------------------

import { Components, Theme } from "@mui/material";

export default function Badge(theme: Theme): Components<Theme> {
  return {
    MuiBadge: {
      styleOverrides: {
        standard: {
          width: 30,
          height: 30,
          backgroundColor: theme.palette.background.default,
          borderRadius: "50%",
          color: theme.palette.action.active,
          fontFamily: theme.typography.fontSecondaryFamily,
          fontSize: theme.typography.body2.fontSize,
        },
      },
    },
  };
}
