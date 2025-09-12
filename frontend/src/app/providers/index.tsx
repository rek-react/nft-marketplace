import { PropsWithChildren } from "react";

import { cookies, headers } from "next/headers";
import { getQueryClient } from "@/shared/lib";
import { dehydrate } from "@tanstack/react-query";
import { prefetchUserMe } from "@/entities/user";
import { CoreProviders } from "./core-providers";

export async function Providers({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();
  const session = (await cookies()).get("connect.sid")?.value;

  if (session) {
    await prefetchUserMe(queryClient);
  }

  const state = dehydrate(queryClient);

  const cookie = (await headers()).get("cookie");

  return (
    <CoreProviders cookie={cookie} state={state}>
      {children}
    </CoreProviders>
  );
}
