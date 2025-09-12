// ----------------------------------------------------------------------

import { Components, Theme } from "@mui/material";

export default function Table(theme: Theme): Components<Theme> {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          position: "relative",
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "separate",
          borderSpacing: "0 20px",
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
        head: {
          color: theme.palette.action.active,
          fontFamily: theme.typography.fontSecondaryFamily,
          borderTop: `1px solid ${theme.palette.background.paper}`,
          borderBottom: `1px solid ${theme.palette.background.paper}`,
          "&:first-child": {
            borderLeft: `1px solid ${theme.palette.background.paper}`,
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,
          },
          "&:last-child": {
            borderRight: `1px solid ${theme.palette.background.paper}`,
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
          },
        },

        body: {
          backgroundColor: theme.palette.background.paper,
          "&:first-child": {
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,
          },
          "&:last-child": {
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
          },
        },

        paddingCheckbox: {
          paddingLeft: theme.spacing(1),
        },
      },
    },
    MuiTablePagination: {
      defaultProps: {
        backIconButtonProps: {
          size: "small",
        },
        nextIconButtonProps: {
          size: "small",
        },
        SelectProps: {
          MenuProps: {
            MenuListProps: {
              sx: {
                "& .MuiMenuItem-root": {
                  ...theme.typography.body2,
                },
              },
            },
          },
        },
      },

      styleOverrides: {
        root: {
          borderTop: `solid 1px ${theme.palette.divider}`,
        },
        toolbar: {
          height: 64,
        },
        actions: {
          marginRight: theme.spacing(1),
        },
        select: {
          "&:focus": {
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
    },
  };
}
