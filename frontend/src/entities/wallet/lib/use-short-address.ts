"use client";

import { useAuthContext } from "@/shared/auth";

export function useShortAddress(chars: number = 6) {
  const { address } = useAuthContext();

  return address && `${address.slice(2, chars + 2)}`;
}
