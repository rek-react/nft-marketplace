import { Components, Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Input(theme: Theme): Components<Theme> {
  return {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.palette.background.default,
          fontSize: theme.typography.body2.fontSize,
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.action.active,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root.Mui-focused": {
            color: theme.palette.background.default,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.background.paper,
          },

          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: 1,
              borderColor: theme.palette.background.paper,
            },
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.background.paper,
          },
        },
        input: {
          color: theme.palette.text.primary,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.text.primary,
          "&:hover, &.Mui-focused, &.Mui-disabled": {
            backgroundColor: theme.palette.text.primary,
          },
          "&.Mui-error": {
            border: `2px solid ${theme.palette.error.main}`,
          },
        },

        input: { padding: 12 },

        underline: {
          "&:before": {
            display: "none",
          },
          "&:after": {
            display: "none",
          },
        },
      },
    },
  };
}
