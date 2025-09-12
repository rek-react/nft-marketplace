import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS, fetcher } from "@/shared/api";

const AUTH_ENDPOINT = ENDPOINTS.auth;

export const useLogout = () => {
  const mutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: () =>
      fetcher<boolean>({
        url: AUTH_ENDPOINT.logout,
        method: "POST",
      }),
  });
  return mutation;
};
