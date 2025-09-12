import { HomePage } from "@/_pages/home";
import { getPrefetchQueries } from "@/_pages/home";
import { getQueryClient } from "@/shared/lib";

export default async function Page() {
  const queryClient = getQueryClient();

  await getPrefetchQueries(queryClient);

  return <HomePage />;
}
