import { ENDPOINTS, fetcher } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import { CategoriesDto } from "./dto";

const CATEGORIES_ENDPOINT = ENDPOINTS.categories;

export const useGetCategories = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetcher<CategoriesDto>({
        url: CATEGORIES_ENDPOINT.list,
      }),
  });

  return query;
};
