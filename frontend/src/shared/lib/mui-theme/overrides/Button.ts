import { ButtonProps } from "@mui/material";
import { Components, Theme, CSSObject } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Button(theme: Theme): Components<Theme> {
  const rootStyle = (ownerState: ButtonProps): CSSObject => {
    const containedVariant = ownerState.variant === "contained";
    const outlinedVariant = ownerState.variant === "outlined";
    const textVariant = ownerState.variant === "text";
    const smallSize = ownerState.size === "small";
    const largeSize = ownerState.size === "large";
    const defaultStyle: CSSObject = {
      whiteSpace: "nowrap",
      transition: "all 0.2s ease",
      ...(containedVariant && {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          transform: "scale(1.05)",
        },
      }),
      ...(outlinedVariant && {
        borderWidth: 2,
        color: theme.palette.text.primary,
        borderColor: theme.palette.primary.main,
        "&:hover": {
          transform: "scale(1.05)",
        },
      }),
      ...(textVariant && {
        color: theme.palette.text.primary,
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      }),
    };

    const loadingState: CSSObject = {
      "&.MuiButton-loading": {
        backgroundColor: theme.palette.primary.main,
        ".MuiButton-loadingIndicator": {
          color: theme.palette.text.primary,
        },
      },
    };

    const size: CSSObject = {
      height: 60,
      padding: "4px 30px",
      ...(smallSize && {
        fontSize: theme.typography.body2.fontSize,
        height: 46,
        ...(textVariant && {
          padding: "12px 20px",
        }),
      }),
      ...(largeSize && {
        padding: "4px 50px",
      }),
    };

    return { ...defaultStyle, ...size, ...loadingState };
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: ({ ownerState }): CSSObject => rootStyle(ownerState),
      },
    },
  };
}
