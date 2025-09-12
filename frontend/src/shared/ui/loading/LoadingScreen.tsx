"use client";

import LinearProgress from "@mui/material/LinearProgress";
import { alpha, Box, BoxProps, SxProps, Theme, useTheme } from "@mui/material";

// ----------------------------------------------------------------------

interface LoadingScreenProps extends BoxProps {
  sx?: SxProps<Theme>;
}
export function LoadingScreen({ sx, ...other }: LoadingScreenProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: alpha(theme.palette.background.default, 0.9),
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ width: "100%", maxWidth: 360, px: 2 }}>
        <LinearProgress color="inherit" />
      </Box>
    </Box>
  );
}
