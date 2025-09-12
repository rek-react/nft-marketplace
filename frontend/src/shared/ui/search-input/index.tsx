"use client";

import {
  InputAdornment,
  TextField,
  TextFieldProps,
  useTheme,
} from "@mui/material";
import { Iconify } from "..";

export function SearchInput({ sx, ...other }: TextFieldProps) {
  const theme = useTheme();

  return (
    <TextField
      sx={{ width: 1, ...sx }}
      variant="outlined"
      {...other}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <Iconify
                icon="ph:magnifying-glass-light"
                color={theme.palette.text.primary}
              />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
