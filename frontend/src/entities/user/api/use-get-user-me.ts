"use client";

import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS, fetcher } from "@/shared/api";
import { UserDto } from "./dto";

const USERS_ENDPOINT = ENDPOINTS.users;

export const useGetUserMe = () => {
  const query = useQuery({
    queryKey: ["userMe"],
    queryFn: () =>
      fetcher<UserDto>({
        url: USERS_ENDPOINT.me,
      }),
    enabled: false,
  });
  return query;
};
