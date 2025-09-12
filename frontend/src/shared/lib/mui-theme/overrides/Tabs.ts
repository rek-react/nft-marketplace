// ----------------------------------------------------------------------

import { Components, Theme } from "@mui/material";

export default function Tabs(theme: Theme): Components<Theme> {
  return {
    MuiTabs: {
      defaultProps: {
        textColor: "inherit",
        allowScrollButtonsMobile: true,
        variant: "scrollable",
      },
      styleOverrides: {
        scrollButtons: {
          width: 48,
          borderRadius: "50%",
        },
        indicator: {
          backgroundColor: theme.palette.action.active,
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        iconPosition: "start",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: 0,
          opacity: 1,
          minWidth: 48,
          fontWeight: 600,
          "&:not(.Mui-selected)": {
            color: theme.palette.action.active,
          },
          ...((ownerState.iconPosition === "start" ||
            ownerState.iconPosition === "end") && {
            minHeight: 48,
          }),
        }),
      },
    },
  };
}
