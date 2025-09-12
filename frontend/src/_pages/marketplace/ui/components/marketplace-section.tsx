"use client";

import { nfts } from "@/_mock/arrays/nfts";
import { NFTList } from "@/widgets/nft-list";
import { useState } from "react";
import { TabsWithContent } from "@/widgets/tabs-with-content";
import { useTheme } from "@mui/material";

export function MarketplaceSection() {
  const theme = useTheme();

  const [tab, setTab] = useState<string>("nfts");

  const handleChangeTab = (newTab: string) => {
    setTab(newTab);
  };

  return (
    <TabsWithContent
      tab={tab}
      tabs={[
        {
          value: "nfts",
          label: "NFTs",
          count: 382,
        },
        {
          value: "collections",
          label: "Collections",
          count: 67,
        },
      ]}
      onChangeTab={handleChangeTab}
    >
      <NFTList
        items={nfts}
        cardSx={{
          backgroundColor: theme.palette.background.default,
        }}
      />
    </TabsWithContent>
  );
}
