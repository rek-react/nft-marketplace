import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS, fetcher } from "@/shared/api";
import { NonceDto } from "./nonce-dto";

const AUTH_ENDPOINT = ENDPOINTS.auth;

export const useGenerateNonce = () => {
  const mutation = useMutation({
    mutationKey: ["generateNonce"],
    mutationFn: () =>
      fetcher<NonceDto>({
        url: AUTH_ENDPOINT.nonce,
        method: "POST",
      }),
  });
  return mutation;
};
