"use client";

import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import ComponentsOverrides from "./overrides";

// ----------------------------------------------------------------------

let theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 20,
  },
});

theme = createTheme(theme, {
  components: ComponentsOverrides(theme),
});

export { theme };

export { globalStyles } from "./global-styles";
