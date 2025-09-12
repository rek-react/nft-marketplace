"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { PropsWithChildren } from "react";
import { cookieToInitialState, WagmiProvider as Provider } from "wagmi";
import { wagmiConfig } from "@/shared/lib";

interface WagmiProviderProps extends PropsWithChildren {
  cookie: string | null;
}

export function WagmiProvider({ children, cookie }: WagmiProviderProps) {
  const initialState = cookieToInitialState(wagmiConfig, cookie);
  return (
    <Provider config={wagmiConfig} initialState={initialState}>
      {children}
    </Provider>
  );
}
