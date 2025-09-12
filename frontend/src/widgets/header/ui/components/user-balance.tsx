"use client";

import { useWalletBalance } from "@/entities/wallet";
import { Skeleton, Typography } from "@mui/material";

export function UserBalance() {
  const { balance, isLoading } = useWalletBalance();

  if (isLoading) return <Skeleton width={110} />;

  return (
    <Typography variant="button">
      {balance.value} {balance.symbol}
    </Typography>
  );
}
