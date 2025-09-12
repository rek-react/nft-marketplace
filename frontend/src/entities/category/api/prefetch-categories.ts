import { ENDPOINTS, fetcher } from "@/shared/api";
import { QueryClient } from "@tanstack/react-query";
import { CategoriesDto } from "./dto";

const CATEGORIES_ENDPOINT = ENDPOINTS.categories;

export const prefetchCategories = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetcher<CategoriesDto>({
        url: CATEGORIES_ENDPOINT.list,
      }),
  });
};
