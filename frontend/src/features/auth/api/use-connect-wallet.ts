import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS, fetcher } from "@/shared/api";
import { UserDto } from "@/entities/user/api/dto";
import { ConnectWalletType } from "../model/types/connect-wallet-type";

const AUTH_ENDPOINT = ENDPOINTS.auth;

export const useConnectWallet = () => {
  const mutation = useMutation({
    mutationKey: ["connectWallet"],
    mutationFn: (formData: ConnectWalletType) =>
      fetcher<UserDto>({
        url: AUTH_ENDPOINT.connectWallet,
        method: "POST",
        data: formData,
      }),
  });
  return mutation;
};
