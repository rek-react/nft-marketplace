"use client";

import { ThemeProvider } from "@mui/material/styles";

import { PropsWithChildren } from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { globalStyles, theme } from "@/shared/lib";

// ----------------------------------------------------------------------

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};
