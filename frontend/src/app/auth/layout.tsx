"use client";

import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { PATHS } from "@/shared/config";
import { useAuthContext } from "@/shared/auth";

export default function Layout({ children }: PropsWithChildren) {
  const { authenticated } = useAuthContext();

  if (authenticated) {
    redirect(PATHS.root);
  }

  return <>{children}</>;
}
