import { ChipProps } from "@mui/material";
import { alpha, Components, CSSObject, Theme } from "@mui/material/styles";

//

// ----------------------------------------------------------------------

export default function Chip(theme: Theme): Components<Theme> {
  const isLight = theme.palette.mode === "light";

  const rootStyle = (ownerState: ChipProps) => {
    const defaultColor = ownerState.color === "default";

    const outlinedVariant = ownerState.variant === "outlined";

    const defaultStyle: CSSObject = {
      ...(defaultColor && {
        backgroundColor: theme.palette.background.paper,
        "& .MuiChip-avatar": {
          color: theme.palette.text[isLight ? "secondary" : "primary"],
          backgroundColor: alpha(theme.palette.grey[500], 0.48),
        },
        // OUTLINED
        ...(outlinedVariant && {
          border: `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
        }),
      }),
    };

    return [defaultStyle];
  };

  return {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => rootStyle(ownerState),
      },
    },
  };
}
