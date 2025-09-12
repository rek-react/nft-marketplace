import { QueryClient } from "@tanstack/react-query";
import { ENDPOINTS, fetcher } from "@/shared/api";
import { UserDto } from "./dto";

const USERS_ENDPOINT = ENDPOINTS.users;

export const prefetchUserMe = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ["userMe"],
    queryFn: () =>
      fetcher<UserDto>({
        url: USERS_ENDPOINT.me,
      }),
  });
};
