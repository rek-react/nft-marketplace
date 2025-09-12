import { PaletteOptions } from "@mui/material";

const PRIMARY = {
  main: "#A259FF",
};

const SUCCESS = {
  main: "#00AC4F",
};

const COMMON: PaletteOptions = {
  common: { black: "#000000", white: "#ffffff1a" },
  primary: PRIMARY,
  success: SUCCESS,
  divider: "#858584",
};
const palette: PaletteOptions = {
  ...COMMON,
  background: {
    default: "#2b2b2b",
    paper: "#3b3b3b",
  },
  text: {
    primary: "#ffffff",
    secondary: "#cccccc",
  },
  action: {
    active: "#858584",
  },
  grey: {
    50: "#FCFDFD",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#BDBDBD",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#1C252E",
    900: "#141A21",
  },
};

export default palette;
