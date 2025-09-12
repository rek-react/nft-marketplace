import { prefetchCategories } from "@/entities/category";
import { QueryClient } from "@tanstack/react-query";

export const getPrefetchQueries = async (queryClient: QueryClient) => {
  await Promise.all([prefetchCategories(queryClient)]);
};
