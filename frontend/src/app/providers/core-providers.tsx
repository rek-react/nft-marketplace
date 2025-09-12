"use client";

import { PropsWithChildren } from "react";
import { WagmiProvider } from "./wagmi-provider";
import { QueryProvider } from "./query-provider";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { DehydratedState } from "@tanstack/react-query";
import { MuiThemeProvider } from "./mui-theme-provider";
import { AuthProvider } from "./auth-proviver";

interface CoreProvidersProps extends PropsWithChildren {
  state: DehydratedState;
  cookie: string | null;
}

export function CoreProviders({ children, state, cookie }: CoreProvidersProps) {
  return (
    <WagmiProvider cookie={cookie}>
      <QueryProvider state={state}>
        <MuiThemeProvider>
          <RainbowKitProvider
            theme={darkTheme()}
            locale="en"
            modalSize="compact"
          >
            <MuiThemeProvider>
              <AuthProvider>{children}</AuthProvider>
            </MuiThemeProvider>
          </RainbowKitProvider>
        </MuiThemeProvider>
      </QueryProvider>
    </WagmiProvider>
  );
}
