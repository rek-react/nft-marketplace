"use client";

import { CONFIG } from "@/shared/config";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { cookieStorage, createStorage } from "wagmi";
import { hardhat } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "NFT marketplace",
  projectId: CONFIG.walletConnectId,
  chains: [hardhat],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
