"use client";

import { MAIN_BOX } from "@/shared/config";
import { TabItem, Tabs } from "@/shared/ui";
import { Box, Container, Divider, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";

interface TabsWithContentProps {
  tab: string;
  tabs: TabItem[];
  onChangeTab: (newTab: string) => void;
}

export function TabsWithContent({
  children,
  onChangeTab,
  tabs,
  tab,
}: PropsWithChildren<TabsWithContentProps>) {
  const theme = useTheme();

  return (
    <Box>
      <Divider sx={{ borderColor: theme.palette.background.paper, mb: 1 }} />
      <Container maxWidth="lg">
        <Tabs value={tab} onChange={onChangeTab} items={tabs} />
      </Container>

      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          pt: {
            sm: `${MAIN_BOX.PT_MAIN_DESKTOP}px`,
            xs: `${MAIN_BOX.PT_MOBILE}px`,
          },
          pb: {
            sm: `${MAIN_BOX.PB_MAIN_DESKTOP}px`,
            xs: `${MAIN_BOX.PB_MOBILE}px`,
          },
        }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Box>
  );
}
