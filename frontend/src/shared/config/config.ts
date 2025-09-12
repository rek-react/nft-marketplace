const isDev = process.env.NODE_ENV === "development";
const isClient = typeof window !== "undefined";

export const CONFIG = {
  isClient,
  isDev,
  serverUrl: `http://${isClient ? "localhost" : "backend"}:3001`,

  walletConnectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || "",
};

export const HEADER = {
  H_MOBILE: 54,
  H_MAIN_DESKTOP: 100,
};

export const NAV = {
  W_BASE: 260,
};

export const MAIN_BOX = {
  PT_MOBILE: 40,
  PT_MAIN_DESKTOP: 80,

  PB_MOBILE: 40,
  PB_MAIN_DESKTOP: 80,
};
