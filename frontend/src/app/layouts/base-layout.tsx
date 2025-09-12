"use client";

import { HEADER } from "@/shared/config";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Box, Stack, useTheme } from "@mui/material";
import NextTopLoader from "nextjs-toploader";
import { PropsWithChildren } from "react";

export function BaseLayout({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <Stack minHeight="100vh">
      <NextTopLoader
        height={3}
        showSpinner={false}
        color={theme.palette.primary.main}
      />
      <Header />
      <Box
        component="main"
        sx={{
          mt: {
            xs: `${HEADER.H_MOBILE}px`,
            md: `${HEADER.H_MAIN_DESKTOP}px`,
          },
        }}
      >
        {children}
      </Box>
      <Footer sx={{ flexGrow: 1 }} />
    </Stack>
  );
}
