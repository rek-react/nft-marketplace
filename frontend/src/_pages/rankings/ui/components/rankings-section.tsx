"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { RankingsTabs } from "./rankings-tabs";
import { RankingsContent } from "./rankings-content";

export function RankingsSection() {
  const [tab, setTab] = useState<string>("today");

  const handleChangeTab = (newTab: string) => {
    setTab(newTab);
  };

  return (
    <Box>
      <RankingsTabs tab={tab} onChange={handleChangeTab} />
      <Box
        sx={{
          pt: 3,
          pb: 5,
        }}
      >
        <RankingsContent />
      </Box>
    </Box>
  );
}
