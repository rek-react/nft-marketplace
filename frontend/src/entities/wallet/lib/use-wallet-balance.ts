"use client";

import { useAuthContext } from "@/shared/auth";
import { formatEth } from "@/shared/lib";
import { useBalance } from "wagmi";

export function useWalletBalance() {
  const { address } = useAuthContext();
  const { data, isLoading } = useBalance({
    address: address ? address : undefined,
    query: {
      refetchInterval: 10_000, // update every 10 seconds
      enabled: !!address,
    },
  });

  return {
    balance: {
      value: formatEth(data?.value || 0),
      symbol: data?.symbol ?? "ETH",
    },
    isLoading,
  };
}
